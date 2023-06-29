import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.navGlobal}>
      <h2>Rick and Morty</h2>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
