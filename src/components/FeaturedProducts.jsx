import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import ProductCard from "./ProductCard.jsx";
import "../styles/FeaturedProducts.css";
import product_01 from "../assets/product_01.jpg" 
import product_02 from "../assets/product_02.jpg"
import product_03 from "../assets/product_03.jpg"
import product_04 from "../assets/product_04.jpg"
import product_05 from "../assets/product_05.jpg"

// Replace `image: null` with imported photos, e.g.
// import banarasi from "../assets/saree-banarasi.jpg";
const PRODUCTS = [
  { id: 1, name: "Temple Gold Jhumkas",  price: 129, image: product_01, tone: "saree-red",   isNew: true, href: "#produit-1" },
  { id: 2, name: "Pearl Kundan Necklace", price: 39,  image: product_02, tone: "gold",        isNew: true, href: "#produit-2" },
  { id: 3, name: "Traditional Gold Bangles",     price: 89,  image: product_03, tone: "gold",        isNew: true, href: "#produit-3" },
  { id: 4, name: "Floral Chandbali Earrings",price: 149, image: product_04, tone: "saree-green", isNew: true, href: "#produit-4" },
  { id: 5, name: "Elegant Kundan Choker",      price: 79,  image: product_05, tone: "gold",        isNew: true, href: "#produit-5" },
];

export default function FeaturedProducts() {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.5; // Continuous scroll speed

    const autoScroll = () => {
      if (!container) return;

      // Get the width of one complete set (half of total, since we duplicated)
      const scrollWidth = container.scrollWidth;
      const halfWidth = scrollWidth / 2;
      
      // Increment scroll position
      container.scrollLeft += scrollSpeed;

      // Reset to start when we've scrolled through the first set
      // This creates a seamless loop effect
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft = 0;
      }

      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll immediately
    autoScrollRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, []);

  return (
    <section className="featured" id="nouveautes" aria-label="Nos coups de cœur">
      <div className="container">
        <SectionTitle>Signature Pieces</SectionTitle>

        <div className="featured__wrapper">
          <ul className="featured__grid" ref={scrollRef}>
            {/* First set of products */}
            {PRODUCTS.map((p) => (
              <li key={`${p.id}-1`}>
                <ProductCard product={p} />
              </li>
            ))}
            {/* Duplicate set for seamless loop */}
            {PRODUCTS.map((p) => (
              <li key={`${p.id}-2`}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>

        <div className="featured__cta">
          <a href="#boutique" className="btn btn--outline">
            Discover All Designs →
          </a>
        </div>
      </div>
    </section>
  );
}
