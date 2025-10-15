import React from "react";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import { ProductViewer } from "./components/ProductViewer";
const App = () => {
  return (
    <div>
      <main>
        <NavBar />

        <Hero />
        <ProductViewer />
      </main>
    </div>
  );
};

export default App;
