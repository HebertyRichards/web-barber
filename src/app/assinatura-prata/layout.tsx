import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Assinatura Prata",
  openGraph: {
    title: "Barbearia Ramos - Assinatura Prata",
  },
};

export default function CancelarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
