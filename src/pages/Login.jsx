import React, { useState } from "react";
import styled from "styled-components";
import { auth, LoginWhitGoogle } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  @media (max-width: 768px) {
    width: 90%;
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
`;

const GoogleButton = styled(Button)`
  display: flex;
  justify-content: space-between;
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
`;
export const Divider = styled.div`
  display: inline-block;
  border-bottom: 1px solid #080808;
  margin-bottom: 2%;
  width: 100%;
  height: 15px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/catalogo");
    } catch (error) {
      console.log(error.message);
    }
  };
  const GoogleLog = () => {
    LoginWhitGoogle();
    navigate("/catalogo");
  };

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
