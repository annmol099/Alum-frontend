import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Reach out anytime!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:prakatictattva@gmail.com">prakatictattva@gmail.com</a>
              </p>
              <p className="sub-text">We'll respond within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Social Media</h3>
              <p>
                <a href="https://instagram.com/slorigin" target="_blank" rel="noopener noreferrer">@slorigin</a>
              </p>
              <p className="sub-text">Follow us on Instagram</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌍</div>
              <h3>Location</h3>
              <p>Made in India</p>
              <p className="sub-text">🇮🇳 India</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Response Time</h3>
              <p>Quick Support</p>
              <p className="sub-text">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
