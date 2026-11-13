// Exemplo didático: itens válidos e preços inteiros em reais.

export type ItemPedido = {
  tipo: string;
  quantidade: number;
};

export type Cardapio = Record<string, number>;

export type Notificar = (mensagem: string) => void;

export const cardapio: Cardapio = { espresso: 8, cappuccino: 12, latte: 14 };

export const pedidoOriginal: ItemPedido[] = [
  { tipo: "espresso", quantidade: 1 },
  { tipo: "cappuccino", quantidade: 2 },
];

export function finalizarPedidoAntes(
  itens: ItemPedido[],
  avisar: Notificar = console.log,
): number {
  let total = 0;
  for (const item of itens) {
    if (item.tipo === "espresso") total += 8 * item.quantidade;
    else if (item.tipo === "cappuccino") total += 12 * item.quantidade;
    else throw new Error("Bebida inválida");
  }
  avisar(`Pedido recebido: R$ ${total}`);
  return total;
}

export function calcularTotal(itens: ItemPedido[], precos: Cardapio): number {
  let total = 0;
  for (const item of itens) {
    const preco = precos[item.tipo];
    if (preco === undefined) throw new Error("Bebida inválida");
    total += preco * item.quantidade;
  }
  return total;
}

// A função notificar é uma estratégia recebida por injeção.
export function finalizarPedido(
  itens: ItemPedido[],
  precos: Cardapio,
  notificar: Notificar,
): number {
  const total = calcularTotal(itens, precos);
  notificar(`Pedido recebido: R$ ${total}`);
  return total;
}
