import "../styles/Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely love my necklace! Beautiful design and wonderful quality.",
    product: "Kundan Necklace",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "New Jersey, USA",
    rating: 5,
    text: "My jhumkas are gorgeous! Perfect for traditional occasions.",
    product: "Pearl Jhumkas",
  },
  {
    id: 3,
    name: "Sophia Williams",
    location: "California, USA",
    rating: 5,
    text: "Beautiful jewellery and a lovely shopping experience. Highly recommend!",
    product: "Gold Bangles",
  },
  {
    id: 4,
    name: "Ananya Sharma",
    location: "Texas, USA",
    rating: 5,
    text: "Elegant designs and amazing attention to detail. I absolutely adore them!",
    product: "Traditional Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" aria-label="Témoignages clients">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__badge">✦ Customer Reviews ✦</span>
          <h2 className="testimonials__title">They Trust Us</h2>
          <p className="testimonials__subtitle">
            Discover What Our Customers Love.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.id} className="testimonial">
              <div className="testimonial__stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="testimonial__star">★</span>
                ))}
              </div>
              <p className="testimonial__text">"{testimonial.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial__info">
                  <p className="testimonial__name">{testimonial.name}</p>
                  <p className="testimonial__location">{testimonial.location}</p>
                  <p className="testimonial__product">{testimonial.product}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
