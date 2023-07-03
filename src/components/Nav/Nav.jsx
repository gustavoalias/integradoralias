import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"
import About from "../About/About"
import React from "react"

export default function Nav(props) {
  return (
    <div className={style.navGlobal}>
      <div>
        <h2>Rick and Morty</h2>
      </div>
      <div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
      </div>
    </div>
  )
}
