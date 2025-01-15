import React from "react";
import Intro from "../components/Intro/Intro";
import Contact from "./Contact";
import About from "../UI/About";
import Services from "../UI/Services";

const Home = () => {
  return (
    <div>
      <main>
        <Intro />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
