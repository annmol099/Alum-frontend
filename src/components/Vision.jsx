import './Vision.css';

export default function Vision() {
  return (
    <section id="vision">
      <div className="vision-container">
        <div className="section-header">
          <h2>Our Vision & Future</h2>
          <p>Building a sustainable future in natural skincare</p>
        </div>

        <div className="vision-grid">
          <div className="vision-card vision-primary">
            <div className="card-icon">🌍</div>
            <h3>Our Vision</h3>
            <p>
              To become a global leader in natural personal care by creating products that respect skin biology and nature.
            </p>
            <ul className="vision-list">
              <li>✓ Science-backed formulations</li>
              <li>✓ Sustainable practices</li>
              <li>✓ Skin-friendly innovation</li>
              <li>✓ Global accessibility</li>
            </ul>
          </div>

          <div className="vision-card vision-secondary">
            <div className="card-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              Revolutionize personal care by proving that natural ingredients can be just as effective as synthetic ones, without compromising safety.
            </p>
            <ul className="vision-list">
              <li>✓ Zero harmful chemicals</li>
              <li>✓ Eco-friendly packaging</li>
              <li>✓ Fair trade ingredients</li>
              <li>✓ Community support</li>
            </ul>
          </div>
        </div>

        <div className="future-plans">
          <h2>Future Plans</h2>
          <p className="subtitle">Coming soon to your skincare routine</p>

          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-icon">🌸</div>
              <h4>Seasonal Fragrances</h4>
              <p>Limited edition fragrances crafted with natural essential oils, changing with every season.</p>
              <span className="status">Coming Soon</span>
            </div>

            <div className="plan-card">
              <div className="plan-icon">🌿</div>
              <h4>Herbal Perfumes</h4>
              <p>Pure botanical perfumes without synthetic chemicals, perfect for sensitive skin.</p>
              <span className="status">Coming Soon</span>
            </div>

            <div className="plan-card">
              <div className="plan-icon">💚</div>
              <h4>Wellness Products</h4>
              <p>Complete wellness line including natural serums, oils, and skin-care essentials.</p>
              <span className="status">Coming Soon</span>
            </div>

            <div className="plan-card">
              <div className="plan-icon">🍃</div>
              <h4>Organic Range</h4>
              <p>100% certified organic products with zero artificial preservatives or additives.</p>
              <span className="status">Coming Soon</span>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Continuous research and development for better products</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>Eco-friendly practices at every step of production</p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h4>Care</h4>
              <p>Deep commitment to customer health and satisfaction</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>Honest, transparent communication with our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
