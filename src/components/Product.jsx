import './Product.css';

export default function Product() {
  const products = [
    {
      id: 1,
      icon: "🌿",
      name: "Natural Deodorant",
      tagline: "Alum-Based Formula",
      description: "SL Origin Natural Deodorant is crafted with pure alum and natural ingredients.",
      features: [
        "✔ Pure Alum Base",
        "✔ Rose Water & Honey",
        "✔ Alcohol-Free",
        "✔ Paraben-Free"
      ],
      benefits: "Controls odor naturally while allowing skin to breathe",
      status: "Coming Soon"
    },
    {
      id: 2,
      icon: "💧",
      name: "Why Alum Works",
      tagline: "Natural Science",
      description: "Alum has been trusted for centuries as nature's deodorant solution.",
      features: [
        "✔ No Sweat Blocking",
        "✔ Natural Detox",
        "✔ Gentle on Skin",
        "✔ Long-Lasting"
      ],
      benefits: "Lets body breathe while eliminating odor-causing bacteria",
      status: "Available"
    },
    {
      id: 3,
      icon: "🌸",
      name: "Premium Ingredients",
      tagline: "Nature's Best",
      description: "Each ingredient is carefully selected for maximum benefit and purity.",
      features: [
        "✔ Pure Alum",
        "✔ Rose Water",
        "✔ Raw Honey",
        "✔ Natural Oils"
      ],
      benefits: "Nourishes skin while providing all-day freshness and protection",
      status: "Coming Soon"
    },
    {
      id: 4,
      icon: "✨",
      name: "Skin-Safe Formula",
      tagline: "Dermatologist Approved",
      description: "Crafted with sensitivity and efficacy in mind for all skin types.",
      features: [
        "✔ No Harmful Chemicals",
        "✔ Hypoallergenic",
        "✔ Tested & Certified",
        "✔ All Skin Types"
      ],
      benefits: "Safe for sensitive skin with zero irritation and maximum comfort",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="product">
      <div className="product-container">
        <div className="section-header">
          <h2>Our Products & Benefits</h2>
          <p>Discover why SL Origin is the natural choice for your skincare</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="product-benefits">
                <strong>Benefits:</strong> {product.benefits}
              </div>
              
              <button className={`product-btn ${product.status === 'Coming Soon' ? 'coming-soon' : 'available'}`}>
                {product.status}
              </button>
            </div>
          ))}
        </div>

        <div className="product-highlight">
          <h3>Why Choose SL Origin?</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <span className="highlight-icon">🌱</span>
              <h4>100% Natural</h4>
              <p>No synthetic chemicals or harmful additives</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💚</span>
              <h4>Eco-Friendly</h4>
              <p>Sustainable sourcing and eco-conscious production</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🔬</span>
              <h4>Science-Backed</h4>
              <p>Formulated with proven natural ingredients</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">❤️</span>
              <h4>Skin-Loving</h4>
              <p>Dermatologist tested and approved for all skin types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
