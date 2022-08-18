import React from "react";
import { Banner } from "./components/banner/banner";
import Cart from "./components/cart/Cart";
import Hero from "./components/hero/Hero";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/navbar/Navbar";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import Stock from "./components/stock/Stock";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NavbarMenu />
      <Cart />
      <Hero />
      <Menu />
      <Banner>
        <h2>Ofertas del mes</h2>
        <p>No te quedes a pata de las Promociones</p>
      </Banner>

      <Stock />

      <h1>Integrador React</h1>
      <p>Usar Redux - Styled-components - Firebase</p>
    </div>
  );
};

export default App;
