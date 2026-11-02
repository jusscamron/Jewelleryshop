import "../styles/PromoBanners.css";
import promo_01 from "../assets/promo_01.png"
import promo_02 from "../assets/promo_02.png"

// Replace `image: null` with imported photos, e.g.
// import sareeBanner from "../assets/banner-sarees.jpg";
const BANNERS = [
  {
    id: "necklaces",
    kicker: "Timeless Elegance",
    title: "Necklaces",
    text: "Elegant necklaces for every occasion.",
    cta: "Explore Now",
    href: "#necklaces",
    image: promo_01,
  },
  {
    id: "bangles-earrings",
    kicker: "Traditional Beauty",
    title: "Bangles",
    text: "Bangles and earrings that define elegance.",
    cta: "Explore Collection",
    href: "#bangles-earrings",
    image: promo_02,
  },
];

export default function PromoBanners() {
  return (
    <section className="promos" id="collections" aria-label="Collections">
      {BANNERS.map((b) => (
        <article
          key={b.id}
          className={`promo promo--${b.id}`}
          style={b.image ? { backgroundImage: `url(${b.image})` } : undefined}
        >
          <div className="promo__content">
            <p className="promo__kicker">{b.kicker}</p>
            <h2 className="promo__title">{b.title}</h2>
            <p className="promo__text">{b.text}</p>
            <a href={b.href} className="btn btn--gold">
              {b.cta}
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
