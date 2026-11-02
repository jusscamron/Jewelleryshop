import React from 'react';
import '../styles/SocialProof.css';

const SocialProof = () => {
  const stats = [
    {
      icon: '👥',
      number: '50,000+',
      label: 'Happy Customers'
    },
    {
      icon: '⭐',
      number: '4.8/5',
      label: 'Average Rating'
    },
    {
      icon: '📦',
      number: '100,000+',
      label: 'Orders Delivered'
    },
    {
      icon: '🏆',
      number: '15+',
      label: 'Years Experience'
    }
  ];

  const badges = [
    {
      icon: '✓',
      title: '100% Authentic',
      description: 'Certified Products'
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On Orders ₹999+'
    },
    {
      icon: '🔄',
      title: '7-Day Returns',
      description: 'Easy Exchange'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'SSL Protected'
    }
  ];

  return (
    <section className="social-proof">
      <div className="social-proof__container">
        {/* Stats Section */}
        <div className="social-proof__stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-card__icon">{stat.icon}</span>
              <h3 className="stat-card__number">{stat.number}</h3>
              <p className="stat-card__label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="social-proof__badges">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <span className="trust-badge__icon">{badge.icon}</span>
              <div className="trust-badge__content">
                <h4 className="trust-badge__title">{badge.title}</h4>
                <p className="trust-badge__description">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
