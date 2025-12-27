import React, { useState } from 'react';
import './ComingSoon.css';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section className="coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <h2 className="coming-soon-title">Be the First</h2>
          <p className="coming-soon-subtitle">
            Experience natural skin protection before everyone else
          </p>
          
          <div className="email-capture-box">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="email-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button 
                    type="submit" 
                    className="email-submit-btn"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Get Access'}
                  </button>
                </div>
                <p className="form-note">
                  <strong>FREE:</strong> Skin-care guide PDF + Early bird discount code
                </p>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <p className="success-text">
                  Check your email for the skin-care guide and early access code!
                </p>
              </div>
            )}
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📧</div>
              <p>Free skin-care guide</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎁</div>
              <p>Early bird discount</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <p>Launch updates</p>
            </div>
          </div>
        </div>

        <div className="coming-soon-visual">
          <div className="visual-box">
            <div className="gradient-circle circle-1"></div>
            <div className="gradient-circle circle-2"></div>
            <div className="coming-soon-icon">💚</div>
          </div>
        </div>
      </div>
    </section>
  );
}
