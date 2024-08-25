import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WorksSection from "./components/WorkSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Testimonials/>
      <WorksSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
