import React from "react";
import Hero from "./components/hero/Hero";
import { Modal } from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import { useOpenProduct } from "./hooks/useOpenProduct";
import { useCompra } from "./hooks/useCompra";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import Register from "./pages/Register";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
import Ofertas from "./pages/Ofertas";
import PayPage from "./pages/PayPage";
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="catalogo" element={<Catalogo {...openProduct} />} />
          <Route path="ofertas" element={<Ofertas {...openProduct} />} />
          <Route path="payPage" element={<PayPage />} />
        </Routes>
        <NewsLetter />

        <h1>Envios a todo el pais</h1>
        <p>Envios Gratis en compras superiores a $10000</p>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
