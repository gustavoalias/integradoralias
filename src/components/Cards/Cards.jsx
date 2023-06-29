import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  console.log(props.characters);
  return (
    <div className={style.cardsContainer}>
      {props.characters.map((p) => (
        <Card
          key={p.id}
          name={p.name}
          status={p.status}
          species={p.species}
          gender={p.gender}
          image={p.image}
          origin={p.origin.name}
          onSearch={props.onSearch}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
