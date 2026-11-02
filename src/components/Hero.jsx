import { useEffect, useState } from "react";
import "../styles/Hero.css";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";

// Put your photos in src/assets/ and import them here, e.g.
// import hero1 from "../assets/hero-1.jpg";
// Until then each slide uses a gradient placeholder.
const SLIDES = [
  {
    id: 1,
    image: hero1,
    title: ["Timeless Beauty", "Crafted to Shine"],
    subtitle: "Tradition, beautifully adorned.",
    tags: ["Jhumkas", "Necklaces", "Bracelets", "Indian Jewellery"],
    cta: "Explore Collection",
    href: "#collections",
  },
  {
    id: 2,
    image: hero2,
    title: ["Indian Jewellery", "Timeless Grace"],
    subtitle: "Inspired by tradition, made for you.",
    tags: ["Jhumkas", "Necklaces", "Bracelets"],
    cta: "Explore Jewellery",
    href: "#sarees",
  },
  {
    id: 3,
    image: hero3,
    title: ["Golden", "Traditions"],
    subtitle: "A touch of heritage, a timeless glow.",
    tags: ["Jhumkas", "Necklaces", "Bracelets"],
    cta: "Discover Jewellery",
    href: "#bijoux",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const handleDotClick = (i) => {
    if (i !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(i);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const slide = SLIDES[index];

  return (
    <section className="hero" aria-roledescription="carousel">
      {/* Mobile decorative elements */}
      <div className="hero__decorative-top" aria-hidden="true" />
      <div className="hero__decorative-corners" aria-hidden="true" />
      
      <div
        className={`hero__media hero__media--${slide.id} ${isTransitioning ? 'hero__media--transitioning' : ''}`}
        style={slide.image ? { backgroundImage: `url(${slide.image})` } : undefined}
        role="img"
        aria-label={slide.subtitle}
      />

      <div className="hero__ornament" aria-hidden="true">
        <div className="hero__ornament-pattern"></div>
      </div>

      <div className="container hero__inner">
        <div className={`hero__content ${isTransitioning ? 'hero__content--exit' : ''}`} key={slide.id}>
          <div className="hero__badge">
            <span className="hero__badge-icon">✦</span>
            <span className="hero__badge-text">Collection Exclusive</span>
          </div>
          
          <h1 className="hero__title">
            {slide.title.map((line, idx) => (
              <span key={line} className="hero__title-line" style={{ animationDelay: `${idx * 0.1}s` }}>
                {line}
              </span>
            ))}
            <span className="hero__title-accent" style={{ animationDelay: '0.2s' }}>
              {slide.subtitle}
            </span>
          </h1>

          <p className="hero__tags">
            {slide.tags.map((t, i) => (
              <span key={t} className="hero__tag-item" style={{ animationDelay: `${0.3 + i * 0.05}s` }}>
                {t}
                {i < slide.tags.length - 1 && <i className="hero__tag-separator"> • </i>}
              </span>
            ))}
          </p>

          <div className="hero__cta" style={{ animationDelay: '0.5s' }}>
            <a href={slide.href} className="btn btn--dark hero__btn">
              {slide.cta}
              <span className="hero__btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__dots" role="tablist">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === index}
            aria-label={`Diapositive ${i + 1}`}
            className={`dot ${i === index ? "dot--active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}
