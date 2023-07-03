import React from "react"
import { useState } from "react"

function Form() {
  const [user, setUser] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
    setErrors(validate({ ...user, [event.target.name]: event.target.value }))
  }
  return (
    <div>
      <form>
        <div>
          <label for="user">Usuario:</label>
          <input type="text" id="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={userData.password} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form
