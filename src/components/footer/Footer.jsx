import React from "react";
import styled from "styled-components";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    height: 120px;
    flex-direction: column;
  }
`;

const FooterContain = styled.div`
  width: 30%;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const IconStyles = { fontSize: "1.8rem", cursor: "pointer" };

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContain>
        <p>© Copyright Tienda Online - 2022</p>
      </FooterContain>
      <FooterContain>
        <AiOutlineWhatsApp style={IconStyles} />
        <AiOutlineInstagram style={IconStyles} />
        <AiOutlineTwitter style={IconStyles} />
      </FooterContain>
      <FooterContain>
        <p>Todos los derechos reservados</p>
      </FooterContain>
    </FooterContainer>
  );
};

export default Footer;
