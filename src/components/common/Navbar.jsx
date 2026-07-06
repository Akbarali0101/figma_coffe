import "./Navbar.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// Public papkasidagi rasmni to'g'ridan-to'g'ri chaqirish tavsiya etiladi
const CoffeeroastersLogo = () => (
  <img src="/logo.png" alt="logo" width="250px" />
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar-container">
      {/* Logotip qismi */}
      <Link to="/" className="navbar-logo-link">
        <CoffeeroastersLogo />
      </Link>

      {/* Desktop uchun menyu */}
      <div className="navbar-desktop-menu">
        <Link to="/" className="nav-link">Home</Link>
        {/* XATO: to="../../pages/about-us.jsx" -> TO'G'RI: to="/about" */}
        <Link to="/about" className="nav-link">About Us</Link>
        {/* XATO: to="../../pages/Subscribe.jsx" -> TO'G'RI: to="/create-plan" */}
        <Link to="/create-plan" className="nav-link">Create Your Plan</Link>
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

      {/* Backdrop */}
      {isMenuOpen && <div className="navbar-backdrop" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobil qurilmalar uchun ochiladigan menyu (Drawer) */}
      <div className={`navbar-mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">About Us</Link>
        <Link to="/create-plan" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Create Your Plan</Link>
      </div>
    </nav>
  );
}