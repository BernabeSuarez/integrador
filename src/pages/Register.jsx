import React, { useState } from "react";
import {
  LoginContainer,
  FormContainer,
  Divider,
  Input,
  ErrorContainer,
} from "../styles/LoginElements";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useFormik } from "formik";

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
  if (!values.name) {
    errors.name = "Campo obligatorio";
  } else if (values.name.length < 8) {
    errors.name = "El nombre de usuario tiene que tener mas de 8 caracteres";
  }
  return errors;
};

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setEmail(values.email);
      setPassword(values.password);
      setUserName(values.name);
      register();
    },
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/login");
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
        <form onSubmit={formik.handleSubmit}>
          <label>
            Nombre de usuario
            <Input
              id="name"
              type="text"
              placeholder="Nombre de usuario"
              onChange={formik.handleChange}
              value={formik.values.name}
              showError={formik.errors.name}
            />
            {formik.errors.name ? (
              <ErrorContainer>{formik.errors.name}</ErrorContainer>
            ) : null}
          </label>
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
              showError={formik.errors.password}
            />
            {formik.errors.password ? (
              <ErrorContainer>{formik.errors.password}</ErrorContainer>
            ) : null}
          </label>
          <Divider />

          <Button type="submit">Registrarse</Button>
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
