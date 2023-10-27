import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects/>
    </div>
  );
};

export default Home;
