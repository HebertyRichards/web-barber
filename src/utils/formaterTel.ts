export function formatarTel(valor: string) {
  valor = valor.replace(/\D/g, "");

  if (valor.length > 2) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  }
  if (valor.length > 10) {
    valor = `${valor.slice(0, 10)}-${valor.slice(10, 14)}`;
  }

  return valor;
}
