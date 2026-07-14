"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navHeader = document.querySelector(".nav-header");
    if (scrolled) {
      navHeader?.classList.add("scrolled");
    } else {
      navHeader?.classList.remove("scrolled");
    }
  }, [scrolled]);

  return (
    <main>
      {/* 1. The Grand Entrance (Hero) */}
      <section className="hero-section">
        <img 
          src="/assets/hero_interior.png" 
          alt="Luxury Restaurant Interior" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Modern <span className="font-italic text-gold">French</span> dining <br />
            with a <span className="font-italic text-gold">timeless</span> soul.
          </h1>
          <a href="/contact" className="btn-editorial" style={{marginTop: '3rem'}}>
            Reserve A Table
          </a>
        </div>
      </section>

      {/* 3. The Ethos / Philosophy */}
      <section className="editorial-section light">
        <div className="container">
          <div className="editorial-grid reveal">
            <div className="editorial-text">
              <span className="section-label">Our Philosophy</span>
              <h2 className="section-title">The Pursuit of <br/><span className="font-italic">Perfection</span></h2>
              <p className="body-text">
                What began as a visionary concept by a collective of ambitious culinary students has evolved into a multi-million dollar institution. We believe that fine dining is not just about sustenance; it is a meticulously crafted, theatrical art form.
              </p>
              <a href="/about" className="btn-editorial">Discover Our Journey</a>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/vib_chef.png" 
                alt="Executive Chef" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Culinary Experience (Tasting Menu Teaser) */}
      <section className="editorial-section" style={{ backgroundColor: '#050505' }}>
        <div className="container">
          <div className="editorial-grid reverse reveal">
            <div className="editorial-text">
              <span className="section-label">The Chef's Tasting</span>
              <h2 className="section-title">An Immersive <br/><span className="font-italic text-gold">Journey</span></h2>
              <p className="body-text">
                Surrender to the expertise of our master chefs with our 9-course signature tasting menu. Each course is a masterful fusion of century-old French technique and highly modern molecular gastronomy, designed to challenge expectations.
              </p>
              <a href="/experience" className="btn-editorial">Explore The Tasting Menu</a>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/menu_main.png" 
                alt="Chef's Tasting Journey" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Selections (A La Carte Teaser) */}
      <section className="editorial-section light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-label">A La Carte</span>
            <h2 className="section-title">Signature <span className="font-italic">Selections</span></h2>
            <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              A massive collection of our finest standalone masterpieces, sourced globally and executed flawlessly.
            </p>
          </div>
          
          <div className="menu-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="menu-item reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
              <div className="menu-image-wrapper" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
                <img src="/assets/dish_risotto_1779556901499.png" alt="White Truffle Risotto" className="menu-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="menu-item-content" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h3 className="menu-item-title" style={{color: 'var(--color-text-dark)', fontSize: '1.2rem'}}>White Truffle Risotto</h3>
              </div>
            </div>
            
            <div className="menu-item reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', transitionDelay: '0.2s' }}>
              <div className="menu-image-wrapper" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
                <img src="/assets/dish_duck_1779556941089.png" alt="Duck A L'Orange" className="menu-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="menu-item-content" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h3 className="menu-item-title" style={{color: 'var(--color-text-dark)', fontSize: '1.2rem'}}>Duck À L'Orange</h3>
              </div>
            </div>
            
            <div className="menu-item reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', transitionDelay: '0.4s' }}>
              <div className="menu-image-wrapper" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
                <img src="/assets/dish_dome_1779556959724.png" alt="Chocolate Dome" className="menu-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="menu-item-content" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h3 className="menu-item-title" style={{color: 'var(--color-text-dark)', fontSize: '1.2rem'}}>Valrhona Chocolate Dome</h3>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ textAlign: 'center', marginTop: '5rem' }}>
            <a href="/menu" className="btn-editorial" style={{ borderColor: 'var(--color-text-dark)', color: 'var(--color-text-dark)' }}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* 6. The Private Sanctuary (VIP) */}
      <section className="editorial-section">
        <div className="container">
          <div className="editorial-grid reveal">
            <div className="editorial-text">
              <span className="section-label">Exclusive Access</span>
              <h2 className="section-title">The <span className="font-italic text-gold">Inner Circle</span></h2>
              <p className="body-text">
                For those seeking absolute discretion and unparalleled service, our VIP Private Dining suite offers a sanctuary of deep black elegance, perfect for high-profile gatherings and corporate buyouts where perfection is the baseline.
              </p>
              <a href="/contact" className="btn-editorial">Inquire For VIP</a>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/vib_private.png" 
                alt="VIP Dining Experience" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Final Invitation (Banner) */}
      <section className="page-hero-section" style={{ height: '60vh' }}>
        <img 
          src="/assets/vib_gallery.png" 
          alt="Restaurant Atmosphere" 
          className="hero-bg" 
        />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9), rgba(10,10,10,0.4))' }}></div>
        <div className="hero-content reveal" style={{ zIndex: 10 }}>
          <span className="section-label">Join Us</span>
          <h2 className="section-title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Secure <span className="font-italic text-gold">Your Table.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
            Complimentary white-glove valet parking provided. We respectfully request Smart Elegant attire for all guests.
          </p>
          <a href="/contact" className="btn-editorial">
            Make A Reservation
          </a>
        </div>
      </section>
    </main>
  );
}
