import React, { useEffect, useState } from "react"
import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Detail() {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data)
      } else {
        window.alert("No hay personajes con ese ID")
      }
    })
  }, [id])

  // return
  // ;<div>
  //   <h1>Hola soy detail</h1>
  //   <p>{character.id}</p>
  //   <p>{character.name}</p>
  //   <p>{character.status}</p>
  //   <p>{character.species}</p>
  //   <p>{character.gender}</p>
  //   <p>{character.origin.name}</p>
  //   <img src="{characters.image" alt="Personaje" />
  // </div>
  return (
    <div className={style.charWrapper}>
      <img src={character.image} alt="Personaje" className={style.charImg} />
      <div className={style.listCharProperty}>
        <p>Id: {character.id}</p>
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>
        {/* <p>{character.origin.name}</p> */}
      </div>
    </div>
  )
}
