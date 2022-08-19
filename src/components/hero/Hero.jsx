import React from "react";
import Button from "../button/Button";
import { HeroContainer, HeroAction, H1, P } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroAction>
        <H1>Bienvenidos a Tienda Online</H1>
        <P>Donde el Rock se viste...</P>
        <Button>Entrar</Button>
      </HeroAction>
    </HeroContainer>
  );
};

export default Hero;
