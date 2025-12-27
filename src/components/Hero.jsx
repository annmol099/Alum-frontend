import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to TechFlow</h1>
          <p className="hero-subtitle">
            Build, Scale, and Deploy Your Ideas with Modern Technology
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <span>⚡ 10x Faster</span>
          </div>
          <div className="floating-card card-2">
            <span>🔒 Secure</span>
          </div>
          <div className="floating-card card-3">
            <span>📈 Scalable</span>
          </div>
          <div className="hero-visual">
            <div className="cube"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
