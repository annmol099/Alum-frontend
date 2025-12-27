import './Header.css';

export default function Header() {
  const handleExploreClick = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span>✨ Revolutionary Skincare</span>
        </div>

        <h1 className="hero-title">
          <span className="title-main">India's First</span>
          <span className="title-highlight">Alum-Based Natural Deodorant</span>
        </h1>
        
        <div className="hero-divider"></div>
        
        <p className="hero-subtitle">Skin-safe • Alcohol-free • Rooted in Prakartic Tattva</p>
        
        <div className="hero-tagline-box">
          <div className="tagline-items">
            <span className="tagline-item">
              <span className="tagline-icon">🛡️</span>
              <span className="tagline-text">Safe</span>
            </span>
            <span className="tagline-divider">•</span>
            <span className="tagline-item">
              <span className="tagline-icon">✨</span>
              <span className="tagline-text">Pure</span>
            </span>
            <span className="tagline-divider">•</span>
            <span className="tagline-item">
              <span className="tagline-icon">🔬</span>
              <span className="tagline-text">Scientific</span>
            </span>
            <span className="tagline-divider">•</span>
            <span className="tagline-item">
              <span className="tagline-icon">🇮🇳</span>
              <span className="tagline-text">Indian</span>
            </span>
            <span className="tagline-divider">•</span>
            <span className="tagline-item">
              <span className="tagline-icon">🌿</span>
              <span className="tagline-text">Nature-Backed</span>
            </span>
          </div>
        </div>

        <button className="hero-btn" onClick={handleExploreClick}>
          <span>EXPLORE PRODUCTS</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </header>
  );
}
