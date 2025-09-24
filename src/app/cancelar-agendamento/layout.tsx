import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Cancelar Agendamento",
  openGraph: {
    title: "Barbearia Ramos - Cancelar Agendamento",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CancelarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
