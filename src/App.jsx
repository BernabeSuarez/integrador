import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NavbarMenu />
      <Hero />
      <h1>Integrador React</h1>
      <p>Usar Redux - Styled-components - Firebase</p>
    </div>
  );
};

export default App;
