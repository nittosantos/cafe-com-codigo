import {
  Added,
  CodeBlock,
  Comment,
  Deleted,
  Kw,
  Str,
} from "../components/CodeBlock.tsx";
import { Scene } from "../components/Scene.tsx";

export function DependencyInversionScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">09 · padrão · strategy</div>
        <h2>
          O aviso troca.
          <br />
          <em>O pedido fica.</em>
        </h2>
        <p>
          A regra do pedido precisa enviar um aviso. Ela não decide se isso
          acontece pelo console, e-mail ou WhatsApp.
        </p>
        <p>
          Recebemos uma função <strong>notificar</strong>. Essa função é a
          estratégia. Quem monta a aplicação escolhe o canal.
        </p>
        <div className="note">
          Inversão de dependência aparece aqui: a regra depende do contrato,
          não de um canal concreto.
        </div>
      </div>
      <div className="stage">
        <CodeBlock
          title="pedido.ts · invertendo a dependência"
          footerLabel="Contrato: função que recebe uma mensagem"
          footerValue="Canal substituível ✓"
        >
          <Deleted>{"console.log(`Pedido recebido: R$ ${total}`);"}</Deleted>
          {"\n\n"}
          <Kw>type</Kw>
          {" Notificar = (mensagem: "}
          <Kw>string</Kw>
          {") => "}
          <Kw>void</Kw>
          {";\n\n"}
          <Kw>function</Kw>
          {" finalizarPedido(\n  itens: Item[],\n  precos: Cardapio,\n  "}
          <Kw>notificar</Kw>
          {": Notificar,\n): "}
          <Kw>number</Kw>
          {" {\n  "}
          <Kw>const</Kw>
          {" total = calcularTotal(itens, precos);\n"}
          <Added>
            {"  notificar("}
            <Str>{"`Pedido recebido: R$ ${total}`"}</Str>
            {");"}
          </Added>
          {"\n  "}
          <Kw>return</Kw>
          {" total;\n}\n\n"}
          <Comment>{"// A escolha do canal fica fora da regra."}</Comment>
          {"\nfinalizarPedido(itens, cardapio, console.log);"}
        </CodeBlock>
      </div>
    </Scene>
  );
}
