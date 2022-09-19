import React, { useState } from "react";
import { auth, LoginWhitGoogle } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "../components/button/Button";
import {
  LoginContainer,
  FormContainer,
  Input,
  GoogleButton,
  GoogleIcon,
  ButtonContainer,
  Divider,
  ErrorContainer,
} from "../styles/LoginElements";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Campo Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ingrese un Email valido";
  }
  if (!values.password) {
    errors.password = "Campo obligatorio";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener mas de 8 caracteres";
  }
  return errors;
};

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
    if (currentUser) {
      navigate("/catalogo");
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setEmail(values.email);
      setPassword(values.password);
      LoginUser();
      console.log(email);
      console.log(password);
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <label>
            Email
            <Input
              id="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              showError={formik.errors.email}
            />
            {formik.errors.email ? (
              <ErrorContainer>{formik.errors.email}</ErrorContainer>
            ) : null}
          </label>
          <label>
            Contraseña
            <Input
              id="password"
              type="password"
              placeholder="Contraseña"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <ErrorContainer>{formik.errors.password}</ErrorContainer>
            ) : null}
          </label>
          <Divider />
          <ButtonContainer>
            <Button type="submit" onClick={LoginUser}>
              Ingresar
            </Button>
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
