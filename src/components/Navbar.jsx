import { useState, useContext } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <Logo size="small" />
          </div>
          <div className="navbar-text">
            <span className="brand-name">SL</span>
            <span className="brand-title">Origin</span>
          </div>
        </div>

        <div className={`navbar-center ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? "Light Mode" : "Dark Mode"}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
