import React from "react";
import { Banner } from "./components/banner/banner";
import Cart from "./components/cart/Cart";
import Hero from "./components/hero/Hero";
import Menu from "./components/Menu/Menu";
import { Modal } from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import Stock from "./components/stock/Stock";
import { useOpenProduct } from "./hooks/useOpenProduct";

const App = () => {
  const openProduct = useOpenProduct();

  return (
    <div className="App">
      <Navbar />
      <Modal {...openProduct} />
      <NavbarMenu />
      <Cart />
      <Hero />
      <Menu />
      <Banner>
        <h2>Ofertas del mes</h2>
        <p>No te quedes a pata de las Promociones</p>
      </Banner>

      <Stock {...openProduct} />

      <h1>Integrador React</h1>
      <p>Usar Redux - Styled-components - Firebase</p>
    </div>
  );
};

export default App;
