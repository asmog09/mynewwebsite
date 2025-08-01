
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  trace,
  wrapTracer
} from "../../esm-chunks/chunk-FKDTZJRV.js";
import {
  require_out
} from "../../esm-chunks/chunk-YUXQHOYO.js";
import {
  require_semver
} from "../../esm-chunks/chunk-TLQCAGE2.js";
import {
  __toESM
} from "../../esm-chunks/chunk-6BT4RYQJ.js";

// src/build/content/server.ts
import { existsSync } from "node:fs";
import {
  access,
  cp,
  mkdir,
  readdir,
  readFile,
  readlink,
  symlink,
  writeFile
} from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve, sep } from "node:path";
import { join as posixJoin, sep as posixSep } from "node:path/posix";
var import_fast_glob = __toESM(require_out(), 1);
var import_semver = __toESM(require_semver(), 1);
import { RUN_CONFIG_FILE } from "../../run/constants.js";
var tracer = wrapTracer(trace.getTracer("Next runtime"));
var toPosixPath = (path) => path.split(sep).join(posixSep);
function isError(error) {
  return error instanceof Error;
}
var copyNextServerCode = async (ctx) => {
  await tracer.withActiveSpan("copyNextServerCode", async () => {
    const reqServerFilesPath = join(
      ctx.standaloneRootDir,
      ctx.relativeAppDir,
      ctx.requiredServerFiles.config.distDir,
      "required-server-files.json"
    );
    try {
      await access(reqServerFilesPath);
    } catch (error) {
      if (isError(error) && error.code === "ENOENT") {
        ctx.failBuild(
          `Failed creating server handler. required-server-files.json file not found at expected location "${reqServerFilesPath}". Your repository setup is currently not yet supported.`
        );
      } else {
        throw error;
      }
    }
    const reqServerFiles = JSON.parse(
      await readFile(reqServerFilesPath, "utf-8")
    );
    if (toPosixPath(ctx.distDir).replace(new RegExp(`^${ctx.relativeAppDir}/?`), "") !== reqServerFiles.config.distDir) {
      reqServerFiles.config.distDir = ctx.nextDistDir;
      await writeFile(reqServerFilesPath, JSON.stringify(reqServerFiles));
    }
    await mkdir(ctx.serverHandlerDir, { recursive: true });
    await writeFile(
      join(ctx.serverHandlerDir, RUN_CONFIG_FILE),
      JSON.stringify({
        nextConfig: reqServerFiles.config,
        // only enable setting up 'use cache' handler when Next.js supports CacheHandlerV2 as we don't have V1 compatible implementation
        // see https://github.com/vercel/next.js/pull/76687 first released in v15.3.0-canary.13
        enableUseCacheHandler: ctx.nextVersion ? (0, import_semver.satisfies)(ctx.nextVersion, ">=15.3.0-canary.13", {
          includePrerelease: true
        }) : false
      }),
      "utf-8"
    );
    const srcDir = join(ctx.standaloneDir, ctx.nextDistDir);
    const nextFolder = toPosixPath(ctx.distDir) === toPosixPath(ctx.buildConfig.distDir) ? ctx.distDir : ctx.nextDistDir;
    const destDir = join(ctx.serverHandlerDir, nextFolder);
    const paths = await (0, import_fast_glob.default)(
      [`*`, `server/*`, `server/chunks/*`, `server/edge-chunks/*`, `server/+(app|pages)/**/*.js`],
      {
        cwd: srcDir,
        extglob: true
      }
    );
    await Promise.all(
      paths.map(async (path) => {
        const srcPath = join(srcDir, path);
        const destPath = join(destDir, path);
        if (path === "server/middleware-manifest.json") {
          try {
            await replaceMiddlewareManifest(srcPath, destPath);
          } catch (error) {
            throw new Error("Could not patch middleware manifest file", { cause: error });
          }
          return;
        }
        await cp(srcPath, destPath, { recursive: true, force: true });
      })
    );
  });
};
async function recreateNodeModuleSymlinks(src, dest, org) {
  const dirents = await readdir(join(src, org || ""), { withFileTypes: true });
  await Promise.all(
    dirents.map(async (dirent) => {
      if (dirent.name.startsWith("@")) {
        return recreateNodeModuleSymlinks(src, dest, dirent.name);
      }
      if (dirent.isSymbolicLink()) {
        const symlinkSrc = join(dest, org || "", dirent.name);
        const symlinkTarget = await readlink(join(src, org || "", dirent.name));
        const symlinkDest = join(dest, org || "", symlinkTarget);
        if (existsSync(symlinkDest) && !existsSync(symlinkSrc)) {
          if (org) {
            await mkdir(join(dest, org), { recursive: true });
          }
          await symlink(symlinkTarget, symlinkSrc);
        }
      }
    })
  );
}
var nextInternalModuleReplacements = [
  {
    // standalone is loading expensive Telemetry module that is not actually used
    // so this replace that module with lightweight no-op shim that doesn't load additional modules
    // see https://github.com/vercel/next.js/pull/63574 that removed need for this shim
    ongoing: false,
    minVersion: "13.5.0-canary.0",
    // perf released in https://github.com/vercel/next.js/releases/tag/v14.2.0-canary.43
    maxVersion: "14.2.0-canary.42",
    nextModule: "next/dist/telemetry/storage.js",
    shimModule: "./next-shims/telemetry-storage.cjs"
  }
];
function getPatchesToApply(nextVersion, patches = nextInternalModuleReplacements) {
  return patches.filter((patch) => {
    if ((0, import_semver.lt)(nextVersion, patch.minVersion)) {
      return false;
    }
    if (patch.ongoing) {
      if ((0, import_semver.prerelease)(nextVersion) || process.env.NETLIFY_NEXT_FORCE_APPLY_ONGOING_PATCHES) {
        return true;
      }
      return (0, import_semver.lte)(nextVersion, patch.maxStableVersion);
    }
    return (0, import_semver.lte)(nextVersion, patch.maxVersion);
  });
}
async function patchNextModules(ctx, nextVersion, serverHandlerRequireResolve) {
  const moduleReplacementsToApply = getPatchesToApply(nextVersion);
  if (moduleReplacementsToApply.length !== 0) {
    await Promise.all(
      moduleReplacementsToApply.map(async ({ nextModule, shimModule }) => {
        try {
          const nextModulePath = serverHandlerRequireResolve(nextModule);
          const shimModulePath = posixJoin(ctx.pluginDir, "dist", "build", "content", shimModule);
          await cp(shimModulePath, nextModulePath, { force: true });
        } catch {
        }
      })
    );
  }
}
var copyNextDependencies = async (ctx) => {
  await tracer.withActiveSpan("copyNextDependencies", async () => {
    const entries = await readdir(ctx.standaloneDir);
    const promises = entries.map(async (entry) => {
      if (entry === ctx.nextDistDir) {
        return;
      }
      const src = join(ctx.standaloneDir, entry);
      const dest = join(ctx.serverHandlerDir, entry);
      await cp(src, dest, { recursive: true, verbatimSymlinks: true, force: true });
      if (entry === "node_modules") {
        await recreateNodeModuleSymlinks(ctx.resolveFromSiteDir("node_modules"), dest);
      }
    });
    const rootSrcDir = join(ctx.standaloneRootDir, "node_modules");
    const rootDestDir = join(ctx.serverHandlerRootDir, "node_modules");
    if (existsSync(rootSrcDir) && ctx.standaloneRootDir !== ctx.standaloneDir) {
      promises.push(
        cp(rootSrcDir, rootDestDir, { recursive: true, verbatimSymlinks: true }).then(
          () => recreateNodeModuleSymlinks(resolve("node_modules"), rootDestDir)
        )
      );
    }
    await Promise.all(promises);
    const serverHandlerRequire = createRequire(posixJoin(ctx.serverHandlerDir, ":internal:"));
    if (ctx.nextVersion) {
      await patchNextModules(ctx, ctx.nextVersion, serverHandlerRequire.resolve);
    }
    try {
      const nextEntryAbsolutePath = serverHandlerRequire.resolve("next");
      const nextRequire = createRequire(nextEntryAbsolutePath);
      nextRequire.resolve("styled-jsx");
    } catch {
      throw new Error(
        "node_modules are not installed correctly, if you are using pnpm please set the public hoist pattern to: `public-hoist-pattern[]=*`.\nRefer to your docs for more details: https://docs.netlify.com/integrations/frameworks/next-js/overview/#pnpm-support"
      );
    }
  });
};
var replaceMiddlewareManifest = async (sourcePath, destPath) => {
  await mkdir(dirname(destPath), { recursive: true });
  const data = await readFile(sourcePath, "utf8");
  const manifest = JSON.parse(data);
  const newManifest = {
    ...manifest,
    middleware: {}
  };
  const newData = JSON.stringify(newManifest);
  await writeFile(destPath, newData);
};
var verifyHandlerDirStructure = async (ctx) => {
  const { nextConfig } = JSON.parse(
    await readFile(join(ctx.serverHandlerDir, RUN_CONFIG_FILE), "utf-8")
  );
  const expectedBuildIDPath = join(ctx.serverHandlerDir, nextConfig.distDir, "BUILD_ID");
  if (!existsSync(expectedBuildIDPath)) {
    ctx.failBuild(
      `Failed creating server handler. BUILD_ID file not found at expected location "${expectedBuildIDPath}".`
    );
  }
};
export {
  copyNextDependencies,
  copyNextServerCode,
  getPatchesToApply,
  verifyHandlerDirStructure
};
