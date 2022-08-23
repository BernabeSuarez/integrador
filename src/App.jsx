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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  const openProduct = useOpenProduct();
  const compra = useCompra();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Modal {...openProduct} {...compra} />
        <NavbarMenu />
        <Cart />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="stock" element={<Stock {...openProduct} />} />
        </Routes>
        <Banner>
          <img src={Logo} alt="Logo Black" />
          <p>Donde el Rock se viste...</p>
        </Banner>

        <h1>Integrador React</h1>
        <p>Usar Redux - Styled-components - Firebase</p>
      </div>
    </BrowserRouter>
  );
};

export default App;
