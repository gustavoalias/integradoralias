import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        <header className={style.card_header}>
          <p className={style.description}>{props.status}</p>

          <a href="#">
            <div className={style.closeContainer}>
              <div className={style.leftright}></div>
              <div className={style.rightleft}></div>
              <label className={style.close}>Cerrar</label>
            </div>
          </a>
        </header>

        <div className={style.card_gallery}>
          <img src={props.image} alt={props.name} className={style.imgRM} />
        </div>

        <div className={style.card_body}>
          <h2 className={style.card_title}>{props.name}</h2>
          <div className={style.card_description}>

            

            <p className={`${style.description} ${style.footerText}`}>{props.species}</p>
            <p className={`${style.description} ${style.footerText}`}>{props.gender}</p>
          </div>
        </div>

        <div className={style.card_info}>{props.origin.name}</div>
      </div>
    </div>
  );
}
