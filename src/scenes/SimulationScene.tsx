import { useState } from "react";
import { Scene } from "../components/Scene.tsx";
import { cardapio, finalizarPedido } from "../domain/pedidos.ts";

type BebidaDemo = "espresso" | "latte";

export function SimulationScene() {
  const [drink, setDrink] = useState<BebidaDemo>("espresso");
  const avisos: string[] = [];
  const total = finalizarPedido(
    [
      { tipo: drink, quantidade: 1 },
      { tipo: "cappuccino", quantidade: 2 },
    ],
    cardapio,
    (mensagem) => {
      avisos.push(mensagem);
    },
  );
  const receipt = `1 × ${drink.padEnd(13)} R$ ${cardapio[drink]}\n2 × cappuccino    R$ 24\n\nTOTAL             R$ ${total}`;
  const checks = `✓ ${avisos[0]}\n${
    drink === "espresso"
      ? "✓ Total preservado: antes R$ 32 → depois R$ 32"
      : "✓ Latte incluído somente no cardápio. Cálculo inalterado."
  }`;

  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">11 · o strategy em ação</div>
        <h2>
          Mesma compra.
          <br />
          <em>Código diferente.</em>
        </h2>
        <p>
          O pedido original continua dando R$ 32. A versão refatorada também
          aceita latte, sem alterar o cálculo.
        </p>
        <p>
          Esta simulação <strong>executa as funções apresentadas</strong>.
          Troque a bebida e observe o total e a mensagem gerada.
        </p>
        <span className="tag">
          Somente simulação local · nenhum envio externo
        </span>
      </div>
      <div className="stage">
        <div className="demo">
          <div className="receipt-title">Seu pedido, por favor.</div>
          <small>1 bebida escolhida + 2 cappuccinos</small>
          <div className="options">
            <button
              className={drink === "espresso" ? "selected" : ""}
              data-drink="espresso"
              onClick={() => setDrink("espresso")}
            >
              Espresso
            </button>
            <button
              className={drink === "latte" ? "selected" : ""}
              data-drink="latte"
              onClick={() => setDrink("latte")}
            >
              Latte
            </button>
          </div>
          <div className="receipt" key={drink} aria-live="polite">
            {receipt}
          </div>
          <div className="pass">{checks}</div>
        </div>
      </div>
    </Scene>
  );
}
