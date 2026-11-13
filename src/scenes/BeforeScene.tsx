import { CodeBlock, Kw, Str } from "../components/CodeBlock.tsx";
import { Scene } from "../components/Scene.tsx";

export function BeforeScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">06 · como está o código</div>
        <h2>
          O caos tem
          <br />
          <em>uma função.</em>
        </h2>
        <p>
          Este é o código desse barista. Uma única função decide o preço, soma
          tudo e envia o aviso.
        </p>
        <div className="note">
          Três motivos para alterar a mesma função: cardápio, cálculo e canal
          de comunicação.
        </div>
      </div>
      <div className="stage">
        <CodeBlock
          title="pedido.ts · antes"
          footerLabel="Um espresso + dois cappuccinos"
          footerValue="R$ 32"
        >
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
          {");\n  }\n  console.log("}
          <Str>{"`Pedido recebido: R$ ${total}`"}</Str>
          {");\n  "}
          <Kw>return</Kw>
          {" total;\n}"}
        </CodeBlock>
      </div>
    </Scene>
  );
}
