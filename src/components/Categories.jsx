import { useEffect, useRef } from "react";
import "../styles/Categories.css";
import jhumka from "../assets/jhumka.jpg"
import earrings from "../assets/earrings.jpg"
import necklace from "../assets/necklace.jpg"
import autres from "../assets/autres.jpg"
import bangles from "../assets/bangles.jpg"
import bracelets from "../assets/bracelets.jpg"
import rings from "../assets/rings.jpg"
import bridal from "../assets/bridal.jpg"


// Replace `image: null` with imported photos, e.g.
// import sareesImg from "../assets/cat-sarees.jpg";
const CATEGORIES = [
  { id: "jhumka", label: "Jhumka", href: "#sarees", image: jhumka },
  { id: "earrings", label: "Earrings", href: "#jhumka", image: earrings },
  { id: "necklace", label: "Necklace", href: "#necklace", image: necklace },
  { id: "autres", label: "Autres", href: "#bijoux", image: autres },
   { id: "bangles", label: "Bangles", href: "#bijoux", image: bangles},
    { id: "bracelets", label: "Bracelets", href: "#bijoux", image: bracelets },
     { id: "rings", label: "Rings", href: "#bijoux", image: rings },
      { id: "bridal", label: "Bridal", href: "#bijoux", image: bridal },
];

export default function Categories() {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Only auto-scroll on mobile
    if (window.innerWidth >= 768) return;

    let scrollPosition = 0;
    let direction = 1;
    const scrollSpeed = 0.5; // pixels per frame

    const autoScroll = () => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      
      scrollPosition += scrollSpeed * direction;

      // Reverse direction at edges
      if (scrollPosition >= maxScroll) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      container.scrollLeft = scrollPosition;
      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a delay
    const timeout = setTimeout(() => {
      autoScrollRef.current = requestAnimationFrame(autoScroll);
    }, 1000);

    // Pause on user interaction
    const handleInteraction = () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      // Resume after 3 seconds of no interaction
      setTimeout(() => {
        scrollPosition = container.scrollLeft;
        autoScrollRef.current = requestAnimationFrame(autoScroll);
      }, 3000);
    };

    container.addEventListener('touchstart', handleInteraction);
    container.addEventListener('mousedown', handleInteraction);

    return () => {
      clearTimeout(timeout);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('mousedown', handleInteraction);
    };
  }, []);

  return (
    <section className="categories" aria-label="Catégories">
      <div className="container">
        <ul className="categories__grid" ref={scrollRef}>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a href={c.href} className="cat">
                <span className="cat__ring">
                  <span
                    className={`cat__img cat__img--${c.id}`}
                    style={c.image ? { backgroundImage: `url(${c.image})` } : undefined}
                    role="img"
                    aria-label={c.label}
                  />
                </span>
                <span className="cat__label">{c.label}</span>
                <span className="cat__link">
                  Explore Now <span className="cat__arrow">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
