import "../styles/FeaturesStrip.css";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" };

const ICONS = {
  quality: (
    <svg viewBox="0 0 40 40" width="38" height="38" {...stroke} aria-hidden="true">
      <path d="M20 6c3 4 3 10 0 15-3-5-3-11 0-15z" />
      <path d="M10 12c5 0 9 3 10 9-5 0-9-3-10-9zM30 12c-5 0-9 3-10 9 5 0 9-3 10-9z" />
      <path d="M5 21c5 0 11 3 15 10M35 21c-5 0-11 3-15 10" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 40 40" width="38" height="38" {...stroke} aria-hidden="true">
      <path d="M4 10h20v18H4z" />
      <path d="M24 16h7l5 6v6h-12z" />
      <circle cx="12" cy="30" r="3" />
      <circle cx="30" cy="30" r="3" />
      <path d="M8 15h8M8 20h6" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 40 40" width="38" height="38" {...stroke} aria-hidden="true">
      <path d="M20 5l13 4v10c0 8-5 14-13 17C12 33 7 27 7 19V9z" />
      <path d="M14 20l4 4 8-9" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 40 40" width="38" height="38" {...stroke} aria-hidden="true">
      <path d="M8 24v-4a12 12 0 0124 0v4" />
      <rect x="6" y="22" width="6" height="10" rx="2" />
      <rect x="28" y="22" width="6" height="10" rx="2" />
      <path d="M31 32c0 3-4 4-9 4" />
    </svg>
  ),
};

const FEATURES = [
  {
    id: "quality",
    title: "Premium Quality",
    text: "Beautifully selected Indian jewellery and timeless designs.",
  },
  {
    id: "delivery",
    title: "USA-India Wide Shipping",
    text: "Reliable delivery across the United States.",
  },
  {
    id: "payment",
    title: "Secure Payments",
    text: "Shop safely with trusted payment options.",
  },
  {
    id: "support",
    title: "Customer Support",
    text: "Here to help you find your perfect jewellery.",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="features" aria-label="Nos engagements">
      <div className="container">
        <ul className="features__grid">
          {FEATURES.map((f) => (
            <li key={f.id} className="feature">
              <span className="feature__icon">{ICONS[f.id]}</span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__text">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
