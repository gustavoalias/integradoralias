import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };
  return (
    <div className={style.centrado}>
      <div className={style.buscador}>
        <input
          type="search"
          className={style.customSearchInput}
          placeholder="Ingrese el id"
          onChange={handleChange}
        />
        <button
          className={`${style.customSearchButton} ${style.buscar}`}
          onClick={() => {
            props.onSearch(id);
          }}
        >
          Agregar
        </button>

        <button
          className={`${style.customSearchButton} ${style.random}`}
          onClick={() => {
            props.onRandom();
          }}
        >
          Random
        </button>
      </div>
    </div>
  );
}
