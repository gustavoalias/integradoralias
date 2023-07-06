import React from "react"
import validate from "./validate"
import { useState } from "react"
import style from "./Form.module.css"

function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(validate({ ...userData, [event.target.name]: event.target.value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData)
  }
  return (
    <>
      {/* <div>
        <div className={style.cardLogin}>
          <header className={style.card_header}>
            <p className={style.description}>Login</p>
          </header>
          <div className={style.card_gallery}>
            <img src={props.image} alt={props.name} className={style.imgRM} />
          </div>
          <div className={style.card_body}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user">Usuario:</label>
                <input type="text" placeholder="Enter your email" id="email" name="email" value={userData.email} onChange={handleChange} />
                <p>{errors.email ? errors.email : null}</p>
              </div>

              <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={userData.password} onChange={handleChange} />
                <p>{errors.password ? errors.password : null}</p>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div> */}
      <div>
        <img src="../../logoRM.png" className={style.logoclass} />
      </div>
      <div className={style.wrapper}>
        <div className={style.inner}>
          <img src="../../rick.png" alt="" className={style.imageUno} />
          <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <div className={style.formHolder}>
              <label htmlFor="email">Email:</label>
              <input type="text" className={style.formControl} placeholder="Enter your email" id="email" name="email" value={userData.email} onChange={handleChange} />
              <p className={style.errorText}>{errors.email ? errors.email : null}</p>
            </div>

            <div className={style.formHolder}>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" className={style.formControl} id="password" name="password" placeholder="Enter your password" value={userData.password} onChange={handleChange} />
              <p className={style.errorText}>{errors.password ? errors.password : null}</p>
            </div>

            <button type="submit" className={style.buttonLogin}>
              <span>Access</span>
            </button>
          </form>
          <img src="../../morty.png" alt="" className={style.imageDos} />
        </div>
      </div>
    </>
  )
}

export default Form
