import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

const NINJA_LOGO =
  "https://static.wixstatic.com/media/64f7b5_e8126bed16284e12a4e5d1f0fd68f45f~mv2.png/v1/fill/w_408,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flying-ninja-silhouette_168578-178_edite.png";

export const metadata: Metadata = {
  title: "Swiftline – Refrigerated Transport & Logistics",
  description: "Swiftline – Refrigerated Transport & Logistics",
  icons: {
    icon: NINJA_LOGO,
    apple: NINJA_LOGO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`antialiased font-sans ${montserrat.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
