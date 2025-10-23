import React from "react";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";

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
        <Performance />
        <Features />
        <Highlights />
        <Footer />
      </main>
      <Analytics />
    </div>
  );
};

export default App;
