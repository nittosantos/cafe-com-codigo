import { Scene } from "../components/Scene.tsx";

const formas = ["Balcão", "Mensagem", "Console"];

export function ClassDiagramScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">10 · diagrama de classes</div>
        <h2>
          O pedido pede.
          <br />
          <em>O canal faz.</em>
        </h2>
        <p>
          <strong>Pedido</strong> é o contexto: chama o aviso e não conhece o
          canal. <strong>Notificar</strong> é o contrato. Balcão, mensagem e
          console cumprem esse contrato.
        </p>
        <div className="note">
          No TypeScript isso é o tipo Notificar e a função finalizarPedido. O
          diagrama mostra a mesma divisão com classes.
        </div>
      </div>
      <div className="stage">
        <div className="uml">
          <div className="uml-box">
            <small>«contexto»</small>
            <b>Pedido</b>
            <span>finalizarPedido()</span>
          </div>
          <div className="uml-use" aria-hidden="true">
            <i />
          </div>
          <div className="uml-box iface">
            <small>«interface»</small>
            <b>Notificar</b>
            <span>avisar(mensagem)</span>
          </div>
          <div className="uml-implements">
            <span className="uml-rel">implementam</span>
            <div className="uml-tree">
              {formas.map((nome) => (
                <div className="uml-leaf" key={nome}>
                  <div className="uml-box">
                    <small>«concreta»</small>
                    <b>{nome}</b>
                    <span>avisar(mensagem)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="uml-caption">
            O pedido chama o contrato. Os três canais implementam o mesmo aviso.
          </p>
        </div>
      </div>
    </Scene>
  );
}
