"use client";

import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          element.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="page-hero-section">
        <img 
          src="/assets/menu_main.png" 
          alt="Culinary Masterpiece" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="font-italic text-gold">Experience</span>
          </h1>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="section-label">Tasting Menu</span>
            <h2 className="section-title">A Culinary <span className="font-italic text-gold">Journey</span></h2>
            <p className="body-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              An immersive 9-course journey through the seasons. Each dish is a masterclass in flavor and technique, designed to challenge expectations and delight the palate.
            </p>
          </div>
          
          <div className="tasting-menu-list">
            <div className="tasting-course reveal">
              <div className="course-number">Course I</div>
              <h3 className="course-title">Oscietra Caviar</h3>
              <p className="course-desc">Served over a delicate smoked sturgeon emulsion, preserved lemon, and toasted brioche infused with seaweed butter.</p>
            </div>
            
            <div className="tasting-course reveal">
              <div className="course-number">Course IV</div>
              <h3 className="course-title">Ruby Lobster</h3>
              <p className="course-desc">Butter-poached lobster tail, vivid emerald herb oil, gold leaf accents, and an intense saffron bisque reduction.</p>
            </div>
            
            <div className="tasting-course reveal">
              <div className="course-number">Course VII</div>
              <h3 className="course-title">A5 Wagyu Striploin</h3>
              <p className="course-desc">Miyazaki wagyu perfectly seared, accompanied by wild foraged truffles, fermented black garlic, and a 48-hour bone marrow jus.</p>
            </div>
            
            <div className="tasting-course reveal" style={{ borderBottom: 'none' }}>
              <div className="course-number">Finale</div>
              <h3 className="course-title">The Emerald Matcha</h3>
              <p className="course-desc">Ceremonial Uji matcha mousse, bright raspberry compote, yuzu gel, and 24k edible gold flakes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="editorial-section light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">A La Carte</span>
            <h2 className="section-title">Signature <span className="font-italic">Classics</span></h2>
          </div>
          
          <div className="menu-grid">
            <div className="menu-item reveal">
              <div className="menu-image-wrapper">
                <img src="/assets/vib_dish1.png" alt="Ruby Lobster" className="menu-image" />
              </div>
              <div className="menu-item-content">
                <h3 className="menu-item-title" style={{color: '#1a1a1a'}}>Ruby Lobster</h3>
                <span className="menu-item-price">$195</span>
              </div>
              <p className="menu-item-desc" style={{color: '#555'}}>Butter-poached lobster, vivid emerald herb oil, gold leaf accents, and saffron bisque.</p>
            </div>
            
            <div className="menu-item reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="menu-image-wrapper">
                <img src="/assets/vib_dish2.png" alt="Emerald Matcha" className="menu-image" />
              </div>
              <div className="menu-item-content">
                <h3 className="menu-item-title" style={{color: '#1a1a1a'}}>Emerald Matcha</h3>
                <span className="menu-item-price">$45</span>
              </div>
              <p className="menu-item-desc" style={{color: '#555'}}>Ceremonial Uji matcha mousse, bright berry compote, and 24k edible gold.</p>
            </div>
            
            <div className="menu-item reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="menu-image-wrapper">
                <img src="/assets/vib_gallery.png" alt="Signature Cocktail" className="menu-image" />
              </div>
              <div className="menu-item-content">
                <h3 className="menu-item-title" style={{color: '#1a1a1a'}}>The Royal Glow</h3>
                <span className="menu-item-price">$28</span>
              </div>
              <p className="menu-item-desc" style={{color: '#555'}}>A highly vibrant, signature glowing molecular cocktail with a brilliant gold rim.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
