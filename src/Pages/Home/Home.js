import React from "react";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
