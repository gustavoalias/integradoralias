import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.navGlobal}>
      <div>
        <h2>Rick and Morty</h2>
      </div>
      <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
    </div>
  );
}
