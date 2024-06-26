import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <section className="color-card">
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="color-card__info">
        <span className="color-card__role">{color.role}</span>
        <span className="color-card__hex">{color.value}</span>
        <span className="color-card__name">{color.name}</span>
      </div>
    </section>
  );
}
