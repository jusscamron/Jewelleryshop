import SectionTitle from "./SectionTitle.jsx";
import "../styles/InstagramFeed.css";
import reel01 from "../assets/reel01.mp4"
import reel02 from "../assets/reel02.mp4"
import reel03 from "../assets/reel03.mp4"

const HANDLE = "vyradesignerjewelry.usa";

// Replace `image: null` with imported photos, e.g.
// import insta1 from "../assets/insta-1.jpg";
const POSTS = [
  { id: 1, video: reel01, tone: "gold-red",  alt: "Necklace doré" },
  { id: 2, video: reel02 , tone: "sand",      alt: "Saree dorée" },
  { id: 3, video: reel03 , tone: "maroon",    alt: "Jhumka" },
  // { id: 4, image: null, tone: "saree",     alt: "Saree bordeaux" },
  // { id: 5, image: null, tone: "gold-cream",alt: "Necklace perles" },
  // { id: 6, image: null, tone: "sand-light",alt: "Tissu doré" },
];

export default function InstagramFeed() {
  return (
    <section className="insta" aria-label="Instagram">
      <div className="container">
        <SectionTitle>Follow Us on Instagram</SectionTitle>

        <ul className="insta__grid">
          {POSTS.map((p) => (
            <li key={p.id}>
              <a
                href={`https://www.instagram.com/${HANDLE}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="insta__tile"
                aria-label={`${p.alt} sur Instagram`}
              >
                {p.video ? (
                  <video
                    className={`insta__img insta__img--${p.tone}`}
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <span
                    className={`insta__img insta__img--${p.tone}`}
                    style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
                  />
                )}
                <span className="insta__overlay" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="insta__cta">
          <a
            href={`https://www.instagram.com/${HANDLE}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            @{HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
