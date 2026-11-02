import "../styles/WhyChooseUs.css";

const REASONS = [
  {
    id: 1,
    icon: "🎨",
    title: "Handpicked Designs",
    description: "Every piece is carefully selected to celebrate authentic Indian artistry.",
  },
  {
    id: 2,
    icon: "✨",
    title: "Premium Quality",
    description: "Beautiful jewellery with attention to detail and timeless craftsmanship.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "USA-Wide Shipping",
    description: "Reliable delivery across the United States.",
  },
  {
    id: 4,
    icon: "💎",
    title: "Affordable Elegance",
    description: "Beautiful traditional designs at thoughtfully selected prices.",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Personalised Support",
    description: "We're here to help you find the perfect piece for every occasion.",
  },
  {
    id: 6,
    icon: "🔒",
    title: "Secure Payments",
    description: "Shop confidently with secure and protected payment options.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" aria-label="Pourquoi nous choisir">
      <div className="container">
        <div className="why-choose__header">
          <h2 className="why-choose__title">Why Choose Vyra</h2>
          <p className="why-choose__subtitle">
           Discover What Makes Us Unique.
          </p>
        </div>

        <div className="why-choose__grid">
          {REASONS.map((reason) => (
            <div key={reason.id} className="why-choose__card">
              <div className="why-choose__icon">{reason.icon}</div>
              <h3 className="why-choose__card-title">{reason.title}</h3>
              <p className="why-choose__card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
