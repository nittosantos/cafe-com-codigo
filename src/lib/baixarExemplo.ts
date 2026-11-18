import { cardapio } from "../domain/pedidos.ts";

export function baixarExemplo(): void {
  const code = `// Execute com Node.js: node --experimental-strip-types cafe-refatorado.ts
// Pergunta a bebida e a quantidade. Digite fim para fechar o pedido.
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

async function pedir(): Promise<void> {
  const { createInterface } = await import("node:readline/promises");
  const { stdin, stdout } = await import("node:process");
  const rl = createInterface({ input: stdin, output: stdout });

  console.log("Cardápio:");
  for (const [bebida, preco] of Object.entries(cardapio)) {
    console.log(\`  \${bebida}  R$ \${preco}\`);
  }
  console.log("\\nMonte o pedido. Quando acabar, digite fim.");

  const itens: Item[] = [];
  while (true) {
    const tipo = (await rl.question("Qual bebida? ")).trim().toLowerCase();
    if (tipo === "fim") break;
    if (cardapio[tipo] === undefined) {
      console.log("Essa bebida não está no cardápio.");
      continue;
    }
    const quantidade = Number((await rl.question("Quantas? ")).trim());
    if (!Number.isInteger(quantidade) || quantidade < 1) {
      console.log("A quantidade precisa ser um inteiro maior que zero.");
      continue;
    }
    itens.push({ tipo, quantidade });
  }

  rl.close();

  if (itens.length === 0) {
    console.log("Nenhum item no pedido.");
    return;
  }

  finalizarPedido(itens, cardapio, console.log);
}

pedir();
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
