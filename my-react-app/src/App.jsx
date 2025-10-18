import React from "react";

import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
      </main>
    </div>
  );
};

export default App;
