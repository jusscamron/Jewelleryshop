import { useState } from "react";
import "../styles/Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send to your email service
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="container">
        <div className="newsletter__content">
          <div className="newsletter__icon">✦</div>
          <h2 className="newsletter__title">
            Join Our Community
          </h2>
          <p className="newsletter__text">
            Sign up for our newsletter and enjoy 10% off your first order, plus exclusive offers and latest arrivals.
          </p>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__input-group">
              <input
                type="email"
                className="newsletter__input"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitted}
              />
              <button 
                type="submit" 
                className="newsletter__button"
                disabled={isSubmitted}
              >
                {isSubmitted ? "✓ Subscribe" : "Sign Up"}
              </button>
            </div>
            <p className="newsletter__privacy">
              🔒 Your data is protected. No spam, unsubscribe anytime.
            </p>
          </form>

          {isSubmitted && (
            <div className="newsletter__success">
              ✓ Thank you! Check your email to confirm your subscription.
            </div>
          )}

          <div className="newsletter__benefits">
            <div className="newsletter__benefit">
              <span className="newsletter__benefit-icon">🎁</span>
              <span className="newsletter__benefit-text">-10% off</span>
            </div>
            <div className="newsletter__benefit">
              <span className="newsletter__benefit-icon">✨</span>
              <span className="newsletter__benefit-text">Be First to Discover New Arrivals</span>
            </div>
            <div className="newsletter__benefit">
              <span className="newsletter__benefit-icon">🎉</span>
              <span className="newsletter__benefit-text">Offres exclusives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
