import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup',
      text: 'TechFlow transformed our entire development workflow. We launched 3x faster!',
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager, Innovate Inc',
      text: 'The best platform we could ask for. Support is incredible and features are top-notch.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Davis',
      role: 'Founder, Creative Studio',
      text: 'Switched from competitors and never looked back. Performance is unmatched!',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Join thousands of satisfied customers</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
