import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Product from './components/Product';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Header />
        <About />
      <Product />
      <Vision />
      <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;