import React from "react";
import styled from "styled-components";

import { LoginWhitGoogle } from "../firebase/firebaseConfig";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "450px", margin: "auto", padding: "12%" }}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="button" value="Ingresar" />
          <input type="button" value="Google" onClick={LoginWhitGoogle} />
        </form>
      </div>
    </div>
  );
};

export default Login;
