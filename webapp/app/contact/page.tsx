"use client";

import { useEffect } from "react";

export default function Contact() {
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
          src="/assets/vib_gallery.png" 
          alt="Contact Us" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Secure <span className="font-italic text-gold">Your Table</span>
          </h1>
        </div>
      </section>

      {/* Standard Reservations */}
      <section className="editorial-section">
        <div className="container">
          <div className="editorial-grid reveal">
            {/* Information Block */}
            <div className="info-grid" style={{ paddingTop: 0, border: 'none', textAlign: 'left', gap: '3rem' }}>
              <div className="info-block">
                <h3>Dress Code</h3>
                <p className="body-text" style={{ fontSize: '0.95rem' }}>We respectfully request Smart Elegant attire. Jackets are highly recommended for gentlemen. Athletic wear, shorts, and open-toed shoes for men are not permitted.</p>
              </div>
              <div className="info-block">
                <h3>Arrival & Valet</h3>
                <p className="body-text" style={{ fontSize: '0.95rem' }}>Complimentary white-glove valet parking is provided at our main entrance on Culinary Blvd.</p>
              </div>
              <div className="info-block">
                <h3>Hours of Operation</h3>
                <p className="body-text" style={{ fontSize: '0.95rem' }}>Tuesday – Saturday<br/>First Seating: 5:30 PM<br/>Last Seating: 9:30 PM<br/><br/>Closed Sunday & Monday.</p>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="reservation-form" style={{ padding: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ action: 'reserve' }) });
                if(res.ok) alert("Your secure reservation request has been submitted to the backend.");
              }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Date & Time</label>
                  <input type="datetime-local" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Party Size</label>
                  <select className="form-input" required style={{ backgroundColor: '#0a0a0a' }}>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <button type="submit" className="btn-editorial" style={{ width: '100%', marginTop: '3rem' }}>Confirm Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* VIP & Private Booking Section */}
      <section className="editorial-section light">
        <div className="container">
          <div className="editorial-grid reverse reveal">
            <div className="editorial-text">
              <span className="section-label">Exclusive Access</span>
              <h2 className="section-title">VIP & Private <span className="font-italic">Booking</span></h2>
              <p className="body-text">
                For parties of 5 or more, corporate buyouts, or high-profile guests requiring absolute discretion, we offer our private dining sanctuary. This experience includes a dedicated culinary team, a private sommelier, and a discreet entrance to ensure complete privacy.
              </p>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ action: 'vip_inquiry' }) });
                if(res.ok) alert("Your VIP inquiry has been securely sent to our concierge.");
              }} style={{ marginTop: '3rem' }}>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Your Concierge/Assistant Email" required style={{ borderBottomColor: 'rgba(255,255,255,0.4)', color: 'var(--color-text-dark)' }} />
                </div>
                <button type="submit" className="btn-editorial" style={{ width: '100%' }}>Submit Private Inquiry</button>
              </form>
            </div>
            <div className="editorial-image-wrapper">
              <img 
                src="/assets/vib_hero.png" 
                alt="VIP Private Dining" 
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
