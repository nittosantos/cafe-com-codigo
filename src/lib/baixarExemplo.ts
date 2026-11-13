import { cardapio, pedidoOriginal } from "../domain/pedidos.ts";

export function baixarExemplo(): void {
  const code = `// Execute com Node.js: node --experimental-strip-types cafe-refatorado.ts
type Item = { tipo: string; quantidade: number };
type Cardapio = Record<string, number>;
type Notificar = (mensagem: string) => void;

const cardapio: Cardapio = ${JSON.stringify(cardapio, null, 2)};

function calcularTotal(itens: Item[], precos: Cardapio): number {
  let total = 0;
  for (const item of itens) {
    const preco = precos[item.tipo];
    if (preco === undefined) throw new Error("Bebida inválida");
    total += preco * item.quantidade;
  }
  return total;
}

function finalizarPedido(
  itens: Item[],
  precos: Cardapio,
  notificar: Notificar,
): number {
  const total = calcularTotal(itens, precos);
  notificar(\`Pedido recebido: R$ \${total}\`);
  return total;
}

const itens: Item[] = ${JSON.stringify(pedidoOriginal, null, 2)};
const total = finalizarPedido(itens, cardapio, console.log);
if (total !== 32) throw new Error("Total incorreto");
`;
  const url = URL.createObjectURL(
    new Blob([code], { type: "text/typescript" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "cafe-refatorado.ts";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
