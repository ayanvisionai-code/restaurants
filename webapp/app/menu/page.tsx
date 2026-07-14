"use client";

import { useState, useEffect } from "react";

const menuItems = [
  { id: 1, name: "Beluga Caviar Reserve", price: "$295", image: "/assets/menu_appetizer.png", details: "Hand-selected Iranian Beluga caviar served with traditional blinis, crème fraîche, and chives. Sourced sustainably from the Caspian Sea." },
  { id: 2, name: "A5 Miyazaki Wagyu", price: "$350", image: "/assets/menu_main.png", details: "The highest grade of Japanese Wagyu beef, known for its incredible marbling. Seared over Binchotan charcoal and served with wild truffles." },
  { id: 3, name: "Ruby Lobster Bisque", price: "$120", image: "/assets/vib_dish1.png", details: "A rich, deep reduction of wild-caught Maine lobster, infused with saffron, cognac, and finished with delicate gold flakes." },
  { id: 4, name: "The Emerald Matcha", price: "$45", image: "/assets/vib_dish2.png", details: "Ceremonial grade Uji matcha transformed into a delicate mousse, paired with vibrant raspberry compote and yuzu gel." },
  { id: 5, name: "Royal Glowing Cocktail", price: "$35", image: "/assets/vib_gallery.png", details: "A signature molecular creation featuring aged gin, butterfly pea extract, and an edible 24k gold rim." },
  { id: 6, name: "White Truffle Risotto", price: "$185", image: "/assets/dish_risotto_1779556901499.png", details: "Acquerello rice perfectly aged, cooked in a rich parmesan broth, and generously shaved with Alba white truffles tableside." },
  { id: 7, name: "Ora King Salmon", price: "$95", image: "/assets/dish_salmon_1779556923671.png", details: "New Zealand's finest salmon, gently confited in olive oil, served alongside charred asparagus and a Meyer lemon beurre blanc." },
  { id: 8, name: "Duck À L'Orange", price: "$110", image: "/assets/dish_duck_1779556941089.png", details: "A modern interpretation of the classic. Dry-aged duck breast, perfectly pink, with a bitter orange glaze and silky potato purée." },
  { id: 9, name: "Valrhona Chocolate Dome", price: "$55", image: "/assets/dish_dome_1779556959724.png", details: "A structural masterpiece of single-origin Madagascar chocolate, revealing a warm, molten core upon serving." },
  { id: 10, name: "Hokkaido Scallops", price: "$85", image: "/assets/dish_scallops_1779556975339.png", details: "Diver-caught Japanese scallops, pan-seared to a golden brown crust, swimming in a delicate sweet corn and lemongrass velouté." },
  { id: 11, name: "Iberico Pork Pluma", price: "$130", image: "/assets/dish_pork_1779557000806.png", details: "The most tender cut of the legendary acorn-fed Spanish pig, grilled over open flame and served with roasted figs." },
  { id: 12, name: "Madagascar Vanilla Mille-Feuille", price: "$40", image: "/assets/menu_dessert.png", details: "Thousands of impossibly thin, crispy pastry layers filled with a rich, aromatic vanilla bean diplomatic cream." },
  { id: 13, name: "Bluefin Tuna Toro", price: "$160", image: "/assets/menu_appetizer.png", details: "The fatty belly of the Bluefin tuna, served raw with a minimal dressing of aged soy, fresh wasabi, and a touch of caviar." },
  { id: 14, name: "Langoustine Carpaccio", price: "$90", image: "/assets/vib_dish1.png", details: "Sweet, delicate Icelandic langoustines, thinly pounded and dressed with finger lime, green apple, and extra virgin olive oil." },
  { id: 15, name: "Smoked Venison Loin", price: "$145", image: "/assets/menu_main.png", details: "Wild venison lightly smoked with cherry wood, paired with a rich blackberry jus and earthy wild mushrooms." }
];

export default function Menu() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <img 
          src="/assets/menu_main.png" 
          alt="A La Carte Menu" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="font-italic text-gold">A La Carte</span> Menu
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="editorial-section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <p className="body-text reveal" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            Our menu is a testament to the world's finest ingredients. 
            We meticulously source every element—from the icy waters of the Caspian Sea to the rich soils of Alba. 
            Select a dish below to unveil the philosophy and preparation behind it.
          </p>
        </div>

        {/* 2. List of 15 Dishes */}
        <div className="container">
          <div className="alacarte-grid">
            {menuItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`alacarte-item reveal stagger-${index % 3}`} 
                style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              >
                <div className="alacarte-header">
                  <h3 className="alacarte-name">{item.name}</h3>
                </div>
                
                <div className="alacarte-image-wrapper">
                  <img src={item.image} alt={item.name} className="alacarte-image" />
                </div>
                
                <div className="alacarte-price-row">
                  <span className="alacarte-price">{item.price}</span>
                  <span className="alacarte-action">
                    {expandedId === item.id ? 'Close details —' : 'View details +'}
                  </span>
                </div>

                {/* 3. Interactive Details */}
                <div className={`alacarte-details ${expandedId === item.id ? 'expanded' : ''}`}>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Concluding Paragraph */}
      <section className="page-hero-section" style={{ height: '70vh', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <img 
          src="/assets/hero_interior.png" 
          alt="Culinary Vision Background" 
          className="hero-bg" 
          style={{ opacity: 0.6 }}
        />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(10,10,10,1), rgba(10,10,10,0.5))' }}></div>
        <div className="hero-content reveal" style={{ zIndex: 10, textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '2rem' }}>
            Culinary <span className="font-italic text-gold">Vision</span>
          </h2>
          <p className="body-text reveal" style={{ maxWidth: '900px', margin: '0 auto', color: '#e0e0e0', fontSize: '1.2rem', lineHeight: '1.8' }}>
            This menu represents more than just food; it is an ongoing dialogue between nature, tradition, and visionary innovation. 
            Our culinary students and master chefs work in absolute harmony to continuously push the boundaries of modern gastronomy. 
            Every plate served is a meticulously calculated piece of art, ensuring that your experience at Sweet Dishes remains forever unparalleled in the world of high-end dining.
          </p>
        </div>
      </section>
      
      <style jsx>{`
        .alacarte-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 5rem 4rem;
        }
        .stagger-1 { margin-top: 3rem; }
        .stagger-2 { margin-top: 6rem; }
        @media (max-width: 900px) {
          .stagger-1, .stagger-2 { margin-top: 0; }
        }
        .alacarte-item {
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 2rem;
          transition: all 0.3s ease;
        }
        .alacarte-item:hover {
          border-bottom: 1px solid var(--color-accent-gold);
        }
        .alacarte-header {
          margin-bottom: 1.5rem;
        }
        .alacarte-name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: #fff;
          transition: color 0.3s ease;
        }
        .alacarte-item:hover .alacarte-name {
          color: var(--color-accent-gold);
        }
        .alacarte-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border-radius: 2px;
          position: relative;
        }
        .alacarte-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.8), transparent);
          pointer-events: none;
        }
        .alacarte-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(0.85) saturate(0.7) brightness(0.9);
          transition: transform 0.8s ease;
        }
        .alacarte-item:hover .alacarte-image {
          transform: scale(1.05);
          filter: contrast(0.95) saturate(0.8) brightness(1);
        }
        .alacarte-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .alacarte-price {
          font-family: var(--font-body);
          font-size: 1.3rem;
          color: #fff;
        }
        .alacarte-action {
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent-gold);
        }
        .alacarte-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease;
          opacity: 0;
        }
        .alacarte-details.expanded {
          max-height: 200px; /* arbitrary high enough value */
          opacity: 1;
        }
        .alacarte-details p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-top: 1rem;
        }
      `}</style>
    </main>
  );
}
