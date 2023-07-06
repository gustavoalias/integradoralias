import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import style from "./Card.module.css";

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
}) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick() {
    console.log(favorites);
    //despachar el objeto de la accion
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFavorite(true);
      dispatch(
        addFavorite({
          name,
          species,
          onClose,
          gender,
          status,
          origin,
          image,
          id,
        })
      );
    }
  }

  useEffect(() => {
    favorites.forEach((favorited) => {
      if (favorited.id === id) {
        setIsFavorite(true);
      }
    });
  }, [favorites]);

  return (
    <div>
      <div className={style.card}>
        <header className={style.card_header}>
          <p className={style.description}>{status}</p>
          {onClose ? (
            <a href="#" onClick={() => onClose(id)}>
              <div className={style.closeContainer}>
                <div className={style.leftright}></div>
                <div className={style.rightleft}></div>
                <label className={style.close}>Cerrar</label>
              </div>
            </a>
          ) : null}
        </header>
        <div className={style.card_gallery}>
          <img src={image} alt={name} className={style.imgRM} />
        </div>
        <div className={style.card_body}>
          <Link to={`/detail/${id}`}>
            <h2 className={style.card_title}>{name}</h2>
          </Link>
          <div className={style.card_description}>
            <p className={`${style.description} ${style.footerText}`}>
              {species}
            </p>
            <p className={`${style.description} ${style.footerText}`}>
              {gender}
            </p>
          </div>
        </div>

        <div className={style.card_info}>{origin}</div>

        {isFavorite ? (
          <button className={style.btnFav} onClick={handleClick}>
            ❤️
          </button>
        ) : (
          <button className={style.btnFav} onClick={handleClick}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}
