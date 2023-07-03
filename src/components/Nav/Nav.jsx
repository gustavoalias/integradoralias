<<<<<<< HEAD
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
=======
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"
import About from "../About/About"
import React from "react"
>>>>>>> 87f94b51346417bc9beced8e7e0c4e9b73b2adb9

export default function Nav(props) {
  return (
    <div className={style.navGlobal}>
      <div>
        <h2>Rick and Morty</h2>
      </div>
      <div>
<<<<<<< HEAD
        <Link to="/home">Home</Link>
        {/* <Link to="./about">About</Link> */}
      </div>
      <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
=======
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
      </div>
>>>>>>> 87f94b51346417bc9beced8e7e0c4e9b73b2adb9
    </div>
  )
}
