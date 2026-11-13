import { Added, CodeBlock, Kw, Str } from "../components/CodeBlock.tsx";
import { Scene } from "../components/Scene.tsx";

const roles = [
  { icon: "▤", title: "Cardápio", detail: "Define os preços" },
  { icon: "∑", title: "Cálculo", detail: "Soma o pedido" },
  { icon: "↗", title: "Atendimento", detail: "Envia o aviso" },
];

export function SingleResponsibilityScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">06 · refatoração · o cálculo</div>
        <h2>
          O cálculo sai
          <br />
          <em>da função.</em>
        </h2>
        <p>
          Na cafeteria, separamos caixa, preparo e atendimento. No código,
          extraímos o cálculo para uma função própria.
        </p>
        <div className="note">
          Responsabilidade única aparece aqui: um motivo coerente para mudar.
          É um princípio. O assunto continua sendo organizar o pedido.
        </div>
        <div className="roles">
          {roles.map((role) => (
            <div className="role" key={role.title}>
              <span>{role.icon}</span>
              <b>{role.title}</b>
              <small>{role.detail}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="stage">
        <CodeBlock
          title="pedido.ts · extraindo o cálculo"
          dots={false}
          preStyle={{ minHeight: 150 }}
        >
          <Added>
            <Kw>function</Kw>
            {" calcularTotal(itens: Item[]): "}
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
            {");\n  }\n  "}
            <Kw>return</Kw>
            {" total;\n}"}
          </Added>
          {"\n"}
          <Kw>function</Kw>
          {" finalizarPedido(itens: Item[]): "}
          <Kw>number</Kw>
          {" {\n  "}
          <Kw>const</Kw>
          {" total = calcularTotal(itens);\n  console.log("}
          <Str>{"`Pedido recebido: R$ ${total}`"}</Str>
          {");\n  "}
          <Kw>return</Kw>
          {" total;\n}"}
        </CodeBlock>
      </div>
    </Scene>
  );
}
