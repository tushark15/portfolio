import Hero from "../hero/Hero";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
