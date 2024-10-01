import React from 'react';
import '../styles/HeroSection.css';
import boxesHero from '../public/boxes-hero.jpg';

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="content">
        <div className="description">
          <h1>Best Removal Company in Cheshire</h1>
          <h2>
            Experience a hassle-free move with our expert house moving services.
            We ensure safe and efficient transportation, making your relocation
            smooth and worry-free.
          </h2>
          <button className="cta-btn">Contact Us </button>
        </div>
        <div className="heroImageArea">
          <img src={boxesHero} alt="pile of boxes" className="heroImage" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
