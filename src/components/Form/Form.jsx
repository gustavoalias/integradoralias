import React from "react";
import validate from "./validate";
import { useState } from "react";

function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p>{errors.email ? errors.email : null}</p>
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>{errors.password ? errors.password : null}</p>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
