import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Agendamento",
  description: "Faça o seu agendamento e venha ficar novo de novo!",
  openGraph: {
    title: "Barbearia Ramos - Agendamento",
    description: "Faça o seu agendamento e venha ficar novo de novo!",
  },
};

export default function CancelarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
