import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { Input } from "../UI/Input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsBody = styled.div`
  width: 100%;
  height: 50%;
  margin: auto;
  padding: 3% 0;
  //background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  @media (max-width: 768px) {
    padding: 1%;
    margin: 1%;
  }
`;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & form {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const InputNews = styled(Input)`
  width: 30rem;
  background-color: #999696;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsLetter = () => {
  const [input, setInput] = useState("");
  const inputhandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    //agrega a la base de datos la lista de emails que se suscribieron
    e.preventDefault();
    if (input) {
      try {
        addDoc(collection(db, "emails"), {
          // crea la lista y agrega cada email nuevo
          email: input,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    setInput("");
  };

  return (
    <NewsContainer>
      <NewsBody>
        <h3>¡Enterate de las ultimas novedades!</h3>
        <p>Suscribite a nuestro newsletter y recibí ofertas exclusivas </p>
        <FormContainer>
          <form action="" onSubmit={submitHandler}>
            <InputNews
              type="email"
              placeholder="Tu Email..."
              onChange={inputhandler}
            />
            <Button onClick={submitHandler}>Suscribirse</Button>
          </form>
        </FormContainer>
      </NewsBody>
    </NewsContainer>
  );
};

export default NewsLetter;
