import React from 'react';
import Header from '../components/common/Header';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header backgroundImage="/hero-bg/image.png"/>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Our Coffee Company</h1>
          <p>
            We are passionate about bringing the finest artisan coffees from around
            the world directly to your cup. Our journey began with a simple mission:
            to share exceptional coffee experiences with everyone.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded by coffee enthusiasts who believed that everyone deserves
            access to exceptional, ethically sourced coffee, we've grown from a
            small roastery to a beloved coffee supplier serving customers nationwide.
          </p>
          <p>
            We travel the world to build direct relationships with coffee farmers,
            ensuring fair wages and sustainable practices throughout our supply chain.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="values-content">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We never compromise on quality, from bean to cup.</p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>Eco-friendly practices in every step of our process.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Supporting coffee-growing communities worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;