import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Header } from "@/components/Active";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbearia Ramos",
  description: "Barbearia Ramos, a melhor barbearia de São Mateus - São Paulo",
  icons: {
    icon: "/icon.webp",
  },
  openGraph: {
    title: "Barbearia Ramos",
    description:
      "Barbearia Ramos, a melhor barbearia de São Mateus - São Paulo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
