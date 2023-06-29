import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.centrado}>
      <div className={style.buscador}>
        <input
          type="search"
          className={style.customSearchInput}
          placeholder="Ingrese el id"
        />
        <button className={style.customSearchButton} onClick={props.onSearch}>
          Agregar
        </button>
      </div>
    </div>
  );
}
