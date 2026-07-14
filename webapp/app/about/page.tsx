"use client";

import { useEffect } from "react";

export default function About() {
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
      {/* 1. Top Page Hero */}
      <section className="page-hero-section">
        <img 
          src="/assets/about_heritage.png" 
          alt="Our Heritage" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            About <span className="font-italic text-gold">Us</span>
          </h1>
        </div>
      </section>

      {/* 2. The Journey / History */}
      <section className="editorial-section light">
        <div className="container">
          <div className="editorial-grid reveal">
            <div className="editorial-text">
              <span className="section-label">Our History</span>
              <h2 className="section-title">The <span className="font-italic">Journey</span></h2>
              <p className="body-text">
                Born from a passion for timeless culinary traditions, Sweet Dishes began as a visionary concept by a collective of ambitious culinary students in California. What started as an underground supper club quickly evolved into a multi-million dollar establishment, revered for its uncompromising dedication to the art of fine dining.
              </p>
              <p className="body-text">
                Over the years, we have meticulously restored this heritage space, transforming it into a modern sanctuary where history and cutting-edge gastronomy seamlessly intertwine.
              </p>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/vib_chef.png" 
                alt="Executive Chef Heritage" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Unique Selling Proposition (USP) */}
      <section className="editorial-section" style={{ backgroundColor: '#050505' }}>
        <div className="container">
          <div className="editorial-grid reverse reveal">
            <div className="editorial-text">
              <span className="section-label">The Experience</span>
              <h2 className="section-title">Our <span className="font-italic text-gold">Signature</span></h2>
              <p className="body-text">
                We do not just serve meals; we curate an unforgettable, sensory journey. Our Unique Selling Proposition lies in our ability to merge classic, century-old French techniques with highly modern, molecular gastronomy. 
              </p>
              <p className="body-text">
                Every dish is a calculated masterpiece, paired with world-class hospitality that anticipates your every need. It is this exact fusion of heritage and extreme innovation that creates a million-dollar dining experience you cannot find anywhere else.
              </p>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/vib_gallery.png" 
                alt="Molecular Gastronomy" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="editorial-section light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-label">Uncompromising Quality</span>
            <h2 className="section-title">Why <span className="font-italic">Choose Us</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="font-serif text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Global Sourcing</h3>
              <p className="body-text">We source only the absolute finest ingredients from across the globe—from Caspian Beluga caviar to A5 Miyazaki Wagyu, flown in daily.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h3 className="font-serif text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Masterful Execution</h3>
              <p className="body-text">Our kitchen is led by Michelin-trained artisans who treat every single plate as a canvas, ensuring flawless execution every time.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <h3 className="font-serif text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Discreet Luxury</h3>
              <p className="body-text">From our private VIP dining sanctuaries to our white-glove valet service, we offer a level of privacy and exclusivity tailored for the elite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Cinematic Banner */}
      <section className="page-hero-section" style={{ height: '50vh', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <img 
          src="/assets/hero_interior.png" 
          alt="Restaurant Atmosphere" 
          className="hero-bg" 
          style={{ animation: 'none', transform: 'scale(1)' }}
        />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.6))' }}></div>
        <div className="hero-content reveal">
          <h2 className="section-title" style={{ fontSize: '3.5rem' }}>
            Awaits <span className="font-italic text-gold">You.</span>
          </h2>
          <a href="/contact" className="btn-editorial" style={{ marginTop: '1rem' }}>
            Secure Your Table
          </a>
        </div>
      </section>
    </main>
  );
}
