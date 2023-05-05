import React from "react";
import { LoginFormik } from "./components/LoginFormik";
import { RegisterFormik } from "./components/RegisterFormik";
import { TareasFormik } from "./components/TareasFormik";
import { app } from './App.css'


function App() {
  return (

    <div>

      {/*Ejemplo Uso Formik y Yup*/}
      {/*<LoginFormik/>*/}
      {/*<RegisterFormik />*/}
      <TareasFormik />

    </div>
  );
}

export default App;
