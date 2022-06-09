import React from "react";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
