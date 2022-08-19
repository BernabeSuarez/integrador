import React from "react";
import Button from "../button/Button";
import { HeroContainer, HeroAction, H1, P, HeroImg } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroAction>
        <H1>Bienvenidos a Tienda Online</H1>
        <P>Envios a todo el pais</P>
        <Button>Entrar</Button>
      </HeroAction>
      <HeroImg>
        <img
          src="img/HeroImgHand.jpg"
          alt="foto"
          style={{
            maxWidth: "500px",
            minWidth: "300px",
            mixBlendMode: "multiply",
          }}
        />
      </HeroImg>
    </HeroContainer>
  );
};

export default Hero;
