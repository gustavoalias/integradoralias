import React from "react";
import style from "./Favorites.module.css";
import { connect, useSelector } from "react-redux";
import Card from "../Card/Card";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={style.container}>
      {favorites?.map((p) => (
        <Card
          id={p.id}
          key={p.id}
          name={p.name}
          species={p.species}
          gender={p.gender}
          status={p.status}
          origin={p.origin.name}
          image={p.image}
        />
      ))}
    </div>
  );
}

export default Favorites;
