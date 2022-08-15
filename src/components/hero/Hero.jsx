import React from "react";
import Button from "../button/Button";
import {
  HeroContainer,
  HeroAction,
  H1,
  P,
  HeroImg,
} from "../../styles/HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroAction>
        <H1>Bienvenidos a Tienda Online</H1>
        <P>donde puedes comprar todo lo que te imaginas</P>
        <Button>Ir a la Tienda</Button>
      </HeroAction>
      <HeroImg>
        <img
          src="img/HeroShopping.svg"
          alt="foto"
          style={{ maxWidth: "400px", minWidth: "200px" }}
        />
      </HeroImg>
    </HeroContainer>
  );
};

export default Hero;
