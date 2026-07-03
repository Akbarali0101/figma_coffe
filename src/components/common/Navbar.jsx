// Navbar komponenti - sayt boshqichi navigatsiya paneli
// Har bir sahifaning tepagi ko'rinib turadi

import "./Navbar.css";
import { useState } from 'react';
import logo from "../../../public/logo.png"

// Coffeeroasters Logotipi (Rangini dinamik o'zgartirish imkoniyati bilan)
const CoffeeroastersLogo = () => (
  <img src={logo} alt="logo" width="250px" />
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logotip qismi */}
      <a href="/" className="navbar-logo-link">
        <CoffeeroastersLogo fillColor="#333D4B" />
      </a>

      {/* Desktop uchun menyu */}
      <div className="navbar-desktop-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Create Your Plan</a>
      </div>

      {/* Mobil uchun hamburger tugmasi */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="navbar-toggle-btn"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // Yopish (X) ikonkiasi
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.522.657l1.414 1.414L9.414 7.5l6.522 6.522-1.414 1.414L8 8.914l-6.522 6.522L.064 14.022 6.586 7.5.064 1.071 1.478-.343 8 6.086 14.522.657z" fill="#333D4B"/>
          </svg>
        ) : (
          // Hamburger (Menyu) ikonkiasi
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h16v3H0V0zm0 6h16v3H0V6zm0 6h16v3H0v-3z" fill="#333D4B"/>
          </svg>
        )}
      </button>

      {/* Mobil qurilmalar uchun ochiladigan menyu (Drawer) */}
      <div className={`navbar-mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Home</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">About Us</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Create Your Plan</a>
      </div>
    </nav>
  );
}