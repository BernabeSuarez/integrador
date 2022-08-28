import React, { useState } from "react";
import styled from "styled-components";
import { auth, LoginWhitGoogle } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("img/loginback.jpg");
  background-size: cover;
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  @media (max-width: 768px) {
    width: 90%;
    padding: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 2% 0;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: #c7c3c3;
  border-radius: 4px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const GoogleButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: auto;
  }
`;
const GoogleIcon = styled(FcGoogle)`
  width: 30px;
  height: 30px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 5% 0;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Divider = styled.div`
  display: inline-block;
  border-bottom: 1px solid #080808;
  margin-bottom: 2%;
  width: 100%;
  height: 15px;
`;

const Login = () => {
  const currentUser = useSelector((state) => state.root.user.currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const GoogleLog = () => {
    LoginWhitGoogle();
  };

  if (currentUser) {
    navigate("/catalogo");
  }

  return (
    <LoginContainer>
      <FormContainer>
        <h2>Login</h2>
        <Divider />
        <form action="">
          <label>
            Email
            <Input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Contraseña
            <Input
              type="text"
              placeholder="Contraseña"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <Divider />
          <ButtonContainer>
            <Button onClick={LoginUser}>Ingresar</Button>
            <GoogleButton onClick={GoogleLog}>
              <GoogleIcon />
            </GoogleButton>
          </ButtonContainer>
        </form>
        <p>Aun no tienes cuenta?</p>
        <Link to="/register">
          <h3>Regístrate</h3>
        </Link>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
