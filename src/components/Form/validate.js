import React from "react";

function validate(input) {
  const error = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");

  if (!regexEmail.test(input.email)) {
    error.email = "Debe ingresar un email válido!";
  }
  if (!input.email) {
    error.email = "Debe ingresar un email!";
  }
  if (input.email.length > 35) {
    error.email = "El email debe tener menos de 35 caracteres";
  }
  if (!regexPassword.test(input.password)) {
    error.password = "Pas debe tener al menos un numero";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    error.password = "Contraseña entre 5 y 10 caracteres!";
  }
  return error;
}

export default validate;
