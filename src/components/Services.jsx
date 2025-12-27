import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build responsive and modern web applications with cutting-edge technologies.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure with automatic scaling and load balancing.'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation.'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for every stage of your project</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
