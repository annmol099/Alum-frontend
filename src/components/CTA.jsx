import './CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of companies building amazing products with TechFlow</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-secondary">Schedule Demo</button>
        </div>
        <p className="cta-footer">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
}
