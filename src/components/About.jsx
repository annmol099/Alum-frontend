import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About SL Origin</h2>
          <p>Innovating Natural Skincare with Science & Nature</p>
        </div>

        <div className="about-grid">
          <div className="about-card founder-card">
            <div className="card-icon">👨‍💼</div>
            <h3>Our Founders</h3>
            <p>
              <span className="highlight">Hardik Gautam & Pankaj Kumar Rai</span> founded SL Origin with a vision to revolutionize the personal care industry.
            </p>
            <p>
              With the guidance of <span className="highlight">Invertis University Incubation</span>, we developed India's first alum-based natural deodorant.
            </p>
          </div>

          <div className="about-card achievement-card">
            <div className="card-icon">🏆</div>
            <h3>Our Achievement</h3>
            <p>
              Won <span className="highlight">2nd Prize at International Biotechnology Conference</span> for our innovative formulation.
            </p>
            <p>
              This recognition motivated us to create safer, more effective, skin-friendly products.
            </p>
          </div>

          <div className="about-card philosophy-card">
            <div className="card-icon">🌿</div>
            <h3>Our Philosophy</h3>
            <p>
              <span className="highlight">"Prakartic Tavtta"</span> — Purity, Safety, and Nature-First Innovation
            </p>
            <p>
              We believe in protecting skin health without harsh chemicals or artificial additives.
            </p>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-item">
            <div className="feature-number">01</div>
            <h4>Alum-Based Formula</h4>
            <p>Naturally controls odor-causing bacteria while being gentle on skin</p>
          </div>
          <div className="feature-item">
            <div className="feature-number">02</div>
            <h4>No Harmful Chemicals</h4>
            <p>Free from alcohol, parabens, and other harsh ingredients</p>
          </div>
          <div className="feature-item">
            <div className="feature-number">03</div>
            <h4>Science-Backed</h4>
            <p>Formulated with research and tested for safety & effectiveness</p>
          </div>
          <div className="feature-item">
            <div className="feature-number">04</div>
            <h4>Natural Ingredients</h4>
            <p>Enriched with rose water, honey, and other natural extracts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
