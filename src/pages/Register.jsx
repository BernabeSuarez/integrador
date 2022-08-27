import React, { useState } from "react";
import { LoginContainer, FormContainer, Divider, Input } from "./Login";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        console.log(userName);
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <LoginContainer>
      <FormContainer>
        <h2>Registrarse</h2>
        <Divider />
        <form action="">
          <label>
            Nombre de usuario
            <Input
              type="text"
              placeholder="Nombre de usuario"
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>
          <label>
            Email
            <Input
              type="text"
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
