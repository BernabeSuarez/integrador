import React, { useState } from "react";
import { LoginContainer, FormContainer, Divider, Input } from "./Login";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <h2>Registrarse</h2>
        <Divider />
        <form action="">
          <label>
            Email
            <Input
              type="text"
              id="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Contraseña
            <Input
              type="text"
              id="password"
              placeholder="Contraseña"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <Divider />

          <Button onClick={register}>Registrarse</Button>
        </form>
        <p>Ya tenes cuenta?</p>
        <Link to="/login">
          <h3>Ingresar</h3>
        </Link>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
