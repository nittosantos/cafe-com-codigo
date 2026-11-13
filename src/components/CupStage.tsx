export type Ticket = {
  kicker: string;
  title: string;
  detail?: string;
};

type CupStageProps = {
  symbol: string;
  cupColor?: string;
  tickets: Ticket[];
  caption?: string;
};

export function CupStage({ symbol, cupColor, tickets, caption }: CupStageProps) {
  return (
    <div className="art">
      <div className="orbit" />
      <div
        className="cup"
        style={cupColor ? { background: cupColor } : undefined}
      >
        {symbol}
      </div>
      <div className="saucer" />
      {tickets.map((ticket, index) => (
        <div className={`ticket t${index + 1}`} key={ticket.kicker}>
          {ticket.kicker}
          <b>{ticket.title}</b>
          {ticket.detail}
        </div>
      ))}
      {caption ? <div className="tiny">{caption}</div> : null}
    </div>
  );
}
