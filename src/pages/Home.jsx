import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  animation: Bg 30s infinite;

  @keyframes Bg {
    0%,
    100% {
      background-image: url("img/homeBack.jpg");
    }
    33% {
      background-image: url("img/homeSlider-2.jpg");
    }
    66% {
      background-image: url("img/homeSlider-3.jpg");
    }
  }
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Link to="/catalogo">
          <Button>Empezar A Comprar</Button>
        </Link>
      </HomeContainer>
    </>
  );
};

export default Home;
