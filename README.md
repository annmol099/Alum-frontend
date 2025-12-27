# 🌿 SL Origin - India's First Alum-Based Natural Deodorant

A modern, responsive React website for SL Origin, showcasing India's first alum-based natural deodorant with scientific backing and nature-inspired design.

![License](https://img.shields.io/badge/License-MIT-green)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.0+-yellow)

---

## 🎯 About SL Origin

SL Origin is a skincare brand founded by **Hardik Gautam & Pankaj Kumar Rai** with a mission to revolutionize personal care through natural, science-backed products.

### Key Features:
- ✨ **100% Natural Formula** - Pure alum base without harsh chemicals
- 🔬 **Science-Backed** - Formulated with research and testing
- 🇮🇳 **Proudly Indian** - Won 2nd Prize at International Biotechnology Conference
- 💚 **Eco-Friendly** - Sustainable sourcing and production
- 🌱 **Skin-Safe** - Dermatologist tested for all skin types

---

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 7.3.0
- **Styling:** CSS3 with Variables & Animations
- **State Management:** Context API (Theme Management)
- **Storage:** LocalStorage (Theme Persistence)
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```
hardik-sl/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css       # Hero section with messaging
│   │   ├── Navbar.jsx / Navbar.css       # Navigation & theme toggle
│   │   ├── Product.jsx / Product.css     # Product showcase
│   │   ├── About.jsx / About.css         # Founder & company story
│   │   ├── Vision.jsx / Vision.css       # Vision & mission
│   │   ├── Contact.jsx / Contact.css     # Contact form
│   │   ├── Footer.jsx / Footer.css       # Footer
│   │   └── [Other components...]
│   ├── context/
│   │   └── ThemeContext.jsx              # Dark/Light mode
│   ├── App.jsx & App.css                 # Global styles & routing
│   └── main.jsx
├── public/
│   ├── OIP.webp                          # Hero background image
│   ├── sl-origin-logo.svg                # Brand logo
│   └── [Other assets...]
├── package.json
├── vite.config.js
└── index.html
```

---

## 🎨 Design Features

### Color Palette
- **Primary Green:** `#22c55e` - Trust, Nature, Growth
- **Primary Blue:** `#0084ff` - Action, Clarity
- **Dark:** `#1a1a2e`, `#16213e` - Professional
- **Light:** `#ffffff`, `#f8f9fa` - Clean

### Animations
- Smooth transitions (0.3s - 0.8s)
- Parallax effects
- Fade-in, slide animations
- Hover effects on CTAs
- Pulse & float effects

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Mobile Small: < 480px

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone Repository**
```bash
git clone https://github.com/annmol099/Alum-frontend.git
cd hardik-sl
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Development Server**
```bash
npm run dev
```
Server starts at `http://localhost:5173`

4. **Build for Production**
```bash
npm run build
```

5. **Preview Production Build**
```bash
npm run preview
```

---

## 📄 Pages & Components

### 🏠 Hero Section (Header)
- **Purpose:** First impression, brand positioning
- **Content:** 
  - "India's First Alum-Based Natural Deodorant"
  - Trust messaging with icons
  - Call-to-action button
- **Features:** Animated badges, gradient text, glassmorphism effects

### 📱 Navbar
- **Features:** 
  - Logo & brand name
  - Navigation menu
  - Dark/Light mode toggle
  - Login/Register buttons
  - Mobile hamburger menu

### 🛍️ Product Section
- 4-card grid showcasing products
- Features & benefits
- Call-to-action buttons

### 👥 About Section
- Founder story (Hardik Gautam & Pankaj Kumar Rai)
- Company achievements
- Philosophy & values

### 🌱 Vision Section
- Company vision & mission
- Core values
- Future plans
- Certifications & awards

### 📞 Contact Section
- Contact form
- Email, phone, location info
- Social media links
- Response time information

### 💬 Coming Soon Section (Ready but not active)
- Email capture form
- Free PDF offer
- Early access incentive

---

## 🌓 Dark/Light Mode

The website supports theme switching with:
- ✅ LocalStorage persistence
- ✅ CSS custom properties for theming
- ✅ Smooth transitions between themes
- ✅ System preference detection (optional)

**CSS Variables:**
```css
/* Light Mode */
--bg-primary: #ffffff
--text-primary: #0f2027
--border-color: #e0e0e0

/* Dark Mode */
--bg-primary: #1a1a2e
--text-primary: #ffffff
--border-color: #2d3561
```

---

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly buttons
- Optimized for all devices

### 2. Performance
- Fast load times with Vite
- Optimized images
- Efficient CSS animations
- Lazy loading ready

### 3. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliant

### 4. SEO Ready
- Meta tags configured
- Semantic structure
- Fast page load
- Mobile friendly

---

## 💚 Trust-First Strategy

The website follows a **Trust → Curiosity → Community → Sales** approach:

1. **Trust Phase**
   - Clear, honest messaging
   - Scientific backing
   - Founder authenticity

2. **Curiosity Phase**
   - Product features explained
   - Why alum works
   - Ingredient showcase

3. **Community Phase**
   - Customer testimonials (coming soon)
   - Instagram integration (coming soon)
   - Community engagement

4. **Sales Phase**
   - Product showcase
   - Email capture
   - Call-to-action buttons

---

## 📊 Future Enhancements

- [ ] Testimonials section
- [ ] Instagram feed integration
- [ ] Blog/Educational content
- [ ] E-commerce functionality
- [ ] User accounts & wishlist
- [ ] Advanced animations
- [ ] Multi-language support
- [ ] Analytics integration

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact

- **Email:** prakatictattva@gmail.com
- **GitHub:** [annmol099](https://github.com/annmol099)
- **Website:** [SL Origin](https://sl-origin.com)

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Invertis University Incubation** - For guidance and support
- **International Biotechnology Conference** - 2nd Prize recognition
- **React & Vite Communities** - For amazing tools

---

## 📈 Project Timeline

- **Phase 1:** Hero section & messaging ✅
- **Phase 2:** Product showcase ✅
- **Phase 3:** About & Founder story (In Progress)
- **Phase 4:** Coming Soon & Email capture (Ready)
- **Phase 5:** Testimonials & Community (Planning)
- **Phase 6:** E-commerce (Planning)

---

## 🚀 Live Demo

Visit the live website: [https://hardik-sl.vercel.app](https://hardik-sl.vercel.app) *(Coming Soon)*

---

**Made with ❤️ for Natural Skincare**

*Safe. Pure. Scientifically Trusted. Proudly Indian. Nature-Backed.* 🌿
