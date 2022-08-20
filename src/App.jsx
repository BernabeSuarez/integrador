import React from "react";
import { Banner } from "./components/banner/banner";
import Hero from "./components/hero/Hero";
import Menu from "./components/Menu/Menu";
import { Modal } from "./components/modal/Modal";
import Logo from "./assets/LogoTiendaInvert.png";
import Navbar from "./components/navbar/Navbar";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import Stock from "./components/stock/Stock";
import { useOpenProduct } from "./hooks/useOpenProduct";
import { useCompra } from "./hooks/useCompra";
import Cart from "./components/cart/Cart";

const App = () => {
  const openProduct = useOpenProduct();
  const compra = useCompra();

  return (
    <div className="App">
      <Navbar />
      <Modal {...openProduct} {...compra} />
      <NavbarMenu />
      <Cart />
      <Hero />
      <Menu />
      <Banner>
        <img src={Logo} alt="Logo Black" />
        <p>Donde el Rock se viste...</p>
      </Banner>

      <Stock {...openProduct} />

      <h1>Integrador React</h1>
      <p>Usar Redux - Styled-components - Firebase</p>
    </div>
  );
};

export default App;
