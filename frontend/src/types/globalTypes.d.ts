interface Cliente {
    id: number;
    imagem: string;
    cliente: string;
    depoimento: string;
  }

  interface Agendamento {
    nome: string;
    telefone?: string;
    email?: string;
    data: string;
    horario: string;
    servico: string[];
    barbeiro: string;
  }

  interface Servico {
    id: number;
    imagem: string;
    servico: string;
    preco: string;
  }

interface Produto {
  id: number;
  imagem: string;
  produto: string;
  preco: string;
}
