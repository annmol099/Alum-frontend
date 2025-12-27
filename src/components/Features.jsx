import './Features.css';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with zero-config setup. Deploy in seconds.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security with end-to-end encryption.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Works perfectly on all devices with mobile-first design.'
    },
    {
      icon: '🌐',
      title: 'Global Scale',
      description: 'CDN-powered global delivery with low latency.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Simple APIs that integrate with your existing tools.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Real-time insights and comprehensive analytics dashboard.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Why Choose TechFlow?</h2>
          <p>Everything you need to build amazing products</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
