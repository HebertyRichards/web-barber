import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Assinatura Ouro",
  openGraph: {
    title: "Barbearia Ramos - Assinatura Ouro",
  },
};

export default function CancelarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
