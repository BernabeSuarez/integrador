import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: "Inter";
  justify-content: center;
  align-items: center;
  background-size: cover;
  animation: Bg 30s infinite;
  filter: contrast(80%);

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

const HomeContain = styled.div`
  margin: auto;
  padding: 20%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5%;
  }
`;

const Title = styled.h2`
  width: 80%;
  margin: auto auto 3rem auto;
  font-weight: 900;
  font-size: 8rem;
  letter-spacing: -0.79px;
  line-height: 6rem;
  animation: FontColor 30s infinite;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 4.5rem;
    line-height: 4rem;
  }

  @keyframes FontColor {
    0%,
    100% {
      color: white;
    }
    33% {
      color: #706e6e;
    }
    66% {
      color: #020202;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Link to="/catalogo">
          <HomeContain>
            <Title>Vestite como mas te guste</Title>
            <Button>Empezar A Comprar</Button>
          </HomeContain>
        </Link>
      </HomeContainer>
    </>
  );
};

export default Home;
