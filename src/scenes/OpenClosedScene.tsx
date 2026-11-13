import { Added, CodeBlock, Comment, Kw, Str } from "../components/CodeBlock.tsx";
import { Scene } from "../components/Scene.tsx";

export function OpenClosedScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">07 · refatoração · o cardápio</div>
        <h2>
          O cardápio abre
          <br />
          <em>sem um novo if.</em>
        </h2>
        <p>
          O cálculo não precisa conhecer cada bebida. Ele consulta um cardápio
          recebido como parâmetro.
        </p>
        <p>
          Adicionar latte agora significa <strong>estender os dados</strong>,
          sem reescrever o algoritmo de soma.
        </p>
        <div className="note">
          Aberto/fechado aparece aqui: estender sem reescrever a soma. Se as
          bebidas ganharem regras próprias, o próximo passo é uma estratégia.
        </div>
      </div>
      <div className="stage">
        <CodeBlock
          title="calculo.ts · depois"
          footerLabel="Mudou o cardápio"
          footerValue="O algoritmo ficou igual ✓"
        >
          <Kw>type</Kw>
          {" Cardapio = Record<"}
          <Kw>string</Kw>
          {", "}
          <Kw>number</Kw>
          {">;\n\n"}
          <Kw>const</Kw>
          {" cardapio: Cardapio = {\n  espresso: 8,\n  cappuccino: 12,\n"}
          <Added>
            {"  latte: 14, "}
            <Comment>{"// nova bebida, mesmo cálculo"}</Comment>
          </Added>
          {"};\n\n"}
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
          {" (preco === undefined)\n      "}
          <Kw>throw new</Kw>
          {" Error("}
          <Str>"Bebida inválida"</Str>
          {");\n    total += preco * item.quantidade;\n  }\n  "}
          <Kw>return</Kw>
          {" total;\n}"}
        </CodeBlock>
      </div>
    </Scene>
  );
}
