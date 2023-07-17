import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.navGlobal}>
      <img src="../../logoRM.png" className={style.logoclass} />

      <div className={style.divMenu}>
        <NavLink className={style.menuLink} to="/home">
          Home
        </NavLink>
        <NavLink className={style.menuLink} to="/about">
          About
        </NavLink>
        <NavLink className={style.menuLink} to="/favorites">
          FAVS ❤️
        </NavLink>

        <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
      </div>
    </div>
  );
}
