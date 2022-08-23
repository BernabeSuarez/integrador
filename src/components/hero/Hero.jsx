import React from "react";
import Button from "../button/Button";
import { HeroContainer, HeroAction, H1, P } from "./HeroElements";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroAction>
        <H1>Bienvenidos a Tienda Online</H1>
        <P>Donde el Rock se viste...</P>
        <Link to="home">
          <Button>Entrar</Button>
        </Link>
      </HeroAction>
    </HeroContainer>
  );
};

export default Hero;
