import "../styles/BrandStory.css";

export default function BrandStory() {
  return (
    <section className="brand-story" aria-label="Notre histoire">
      <div className="container">
        <div className="brand-story__content">
          <div className="brand-story__image">
            <div className="brand-story__image-placeholder">
              <div className="brand-story__ornament">
                <span>✦</span>
                <span>VYRA</span>
                <span>✦</span>
              </div>
            </div>
          </div>

          <div className="brand-story__text">
            <span className="brand-story__label">Our Story</span>
            <h2 className="brand-story__title">
              Indian Heritage, Timeless Elegance
            </h2>
            <div className="brand-story__description">
              <p>
                <strong>VYRA JEWELLERS</strong>  was born from a love for India's rich cultural heritage and a passion for sharing the beauty of traditional Indian jewellery with the world.
              </p>
              <p>
                Every piece in our collection is thoughtfully selected to celebrate Indian artistry, timeless designs, and exceptional craftsmanship.
              </p>
              <p>
                From elegant <strong> jhumkas and statement necklaces </strong>  to beautiful bangles and bracelets, our jewellery brings tradition and modern elegance together.
              </p>
              <p>
                We take pride in making the beauty of Indian jewellery accessible to everyone, wherever they are.
              </p>
            </div>

            <div className="brand-story__stats">
              <div className="brand-story__stat">
                <span className="brand-story__stat-number">500+</span>
                <span className="brand-story__stat-label">PRODUCTS</span>
              </div>
              <div className="brand-story__stat">
                <span className="brand-story__stat-number">2000+</span>
                <span className="brand-story__stat-label">Happy Customers</span>
              </div>
              <div className="brand-story__stat">
                <span className="brand-story__stat-number">100%</span>
                <span className="brand-story__stat-label">Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
