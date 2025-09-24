import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Assinatura Bronze",
  openGraph: {
    title: "Barbearia Ramos - Assinatura Bronze",
  },
};

export default function CancelarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
