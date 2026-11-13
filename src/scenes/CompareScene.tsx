import { CodeBlock, Comment, Kw, Str } from "../components/CodeBlock.tsx";
import { Scene } from "../components/Scene.tsx";

export function CompareScene() {
  return (
    <Scene className="compare">
      <div className="compare-head reveal">
        <div className="eyebrow">10 · lado a lado</div>
        <p>
          O mesmo pedido, <strong>R$ 32</strong>. Os comentários marcam o que
          mudou. O da esquerda é menor. É aí que mora o problema.
        </p>
      </div>
      <div className="reveal">
        <CodeBlock
          title="pedido.ts · antes"
          footerLabel="Preço, soma e aviso na mesma função"
          footerValue="R$ 32"
        >
          <Comment>{"// Menor. E faz três trabalhos.\n\n"}</Comment>
          <Kw>type</Kw>
          {" Item = { tipo: "}
          <Kw>string</Kw>
          {"; quantidade: "}
          <Kw>number</Kw>
          {" };\n\n"}
          <Kw>function</Kw>
          {" finalizarPedido(itens: Item[]): "}
          <Kw>number</Kw>
          {" {\n  "}
          <Kw>let</Kw>
          {" total = 0;\n  "}
          <Kw>for</Kw>
          {" ("}
          <Kw>const</Kw>
          {" item "}
          <Kw>of</Kw>
          {" itens) {\n    "}
          <Comment>{"// Cada bebida nova pede outro if.\n    "}</Comment>
          <Kw>if</Kw>
          {" (item.tipo === "}
          <Str>"espresso"</Str>
          {")\n      total += 8 * item.quantidade;\n    "}
          <Kw>else if</Kw>
          {" (item.tipo === "}
          <Str>"cappuccino"</Str>
          {")\n      total += 12 * item.quantidade;\n    "}
          <Kw>else throw new</Kw>
          {" Error("}
          <Str>"Bebida inválida"</Str>
          {");\n  }\n  "}
          <Comment>{"// O canal não consegue sair daqui.\n  "}</Comment>
          {"console.log("}
          <Str>{"`Pedido recebido: R$ ${total}`"}</Str>
          {");\n  "}
          <Kw>return</Kw>
          {" total;\n}"}
        </CodeBlock>
      </div>
      <div className="stage">
        <CodeBlock
          title="pedido.ts · depois"
          footerLabel="Cardápio, cálculo e Strategy"
          footerValue="R$ 32"
        >
          <Comment>{"// O preço saiu da função.\n"}</Comment>
          <Kw>type</Kw>
          {" Item = { tipo: "}
          <Kw>string</Kw>
          {"; quantidade: "}
          <Kw>number</Kw>
          {" };\n"}
          <Kw>type</Kw>
          {" Cardapio = Record<"}
          <Kw>string</Kw>
          {", "}
          <Kw>number</Kw>
          {">;\n"}
          <Comment>{"// Contrato do aviso. O canal fica de fora.\n"}</Comment>
          <Kw>type</Kw>
          {" Notificar = (mensagem: "}
          <Kw>string</Kw>
          {") => "}
          <Kw>void</Kw>
          {";\n\n"}
          <Kw>const</Kw>
          {" cardapio: Cardapio = {\n  espresso: 8,\n  cappuccino: 12,\n  latte: 14, "}
          <Comment>{"// novo, sem outro if"}</Comment>
          {"\n};\n\n"}
          <Comment>{"// Só soma. Não conhece o nome da bebida.\n"}</Comment>
          <Kw>function</Kw>
          {" calcularTotal(itens: Item[], precos: Cardapio): "}
          <Kw>number</Kw>
          {" {\n  "}
          <Kw>let</Kw>
          {" total = 0;\n  "}
          <Kw>for</Kw>
          {" ("}
          <Kw>const</Kw>
          {" item "}
          <Kw>of</Kw>
          {" itens) {\n    "}
          <Kw>const</Kw>
          {" preco = precos[item.tipo];\n    "}
          <Kw>if</Kw>
          {" (preco === undefined) "}
          <Kw>throw new</Kw>
          {" Error("}
          <Str>"Bebida inválida"</Str>
          {");\n    total += preco * item.quantidade;\n  }\n  "}
          <Kw>return</Kw>
          {" total;\n}\n\n"}
          <Kw>function</Kw>
          {" finalizarPedido(\n  itens: Item[],\n  precos: Cardapio,\n  notificar: Notificar,\n): "}
          <Kw>number</Kw>
          {" {\n  "}
          <Kw>const</Kw>
          {" total = calcularTotal(itens, precos);\n  "}
          <Comment>{"// Strategy: quem chama escolhe o canal.\n  "}</Comment>
          {"notificar("}
          <Str>{"`Pedido recebido: R$ ${total}`"}</Str>
          {");\n  "}
          <Kw>return</Kw>
          {" total;\n}"}
        </CodeBlock>
      </div>
    </Scene>
  );
}
