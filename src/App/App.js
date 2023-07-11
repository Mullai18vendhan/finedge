import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import './App.css';


function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
