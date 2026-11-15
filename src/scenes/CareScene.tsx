import { Scene } from "../components/Scene.tsx";

const cuidados = [
  {
    icon: "✓",
    title: "Usar",
    detail: "A mesma tarefa tem formas que trocam.",
  },
  {
    icon: "–",
    title: "Evitar",
    detail: "A variação ainda não existe.",
  },
  {
    icon: "◻",
    title: "No caixa",
    detail: "Pix, cartão ou boleto.",
  },
];

export function CareScene() {
  return (
    <Scene>
      <div className="reveal">
        <div className="eyebrow">14 · cuidados</div>
        <h2>
          Um canal só
          <br />
          <em>não precisa disso.</em>
        </h2>
        <p>
          Se o aviso nunca muda, a estratégia é uma peça a mais. O padrão ajuda
          quando a forma realmente troca.
        </p>
        <div className="note">
          No pagamento, o checkout pede “pague”. Pix, cartão ou boleto cumprem.
          O caixa não conhece a forma.
        </div>
      </div>
      <div className="stage">
        <div className="roles">
          {cuidados.map((cuidado) => (
            <div className="role" key={cuidado.title}>
              <span>{cuidado.icon}</span>
              <b>{cuidado.title}</b>
              <small>{cuidado.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
