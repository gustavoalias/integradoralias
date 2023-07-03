<<<<<<< HEAD
import "./App.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
=======
import "./App.css"
import Cards from "./components/Cards/Cards"
// import SearchBar from "./components/SearchBar/SearchBar"
import About from "./components/About/About"
import Nav from "./components/Nav/Nav"
import { useState } from "react"
import axios from "axios"
import { Routes, Route, useLocation } from "react-router-dom"
>>>>>>> 87f94b51346417bc9beced8e7e0c4e9b73b2adb9
// import characters, { Rick } from "./data";
import Detail from "./components/Detail/Detail"

function App() {
  const [characters, setCharacters] = useState([])
  const { pathname } = useLocation()
  console.log(pathname)
  //   const example = {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     status: "Alive",
  //     species: "Human",
  //     gender: "Male",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   };

  // const onSearch = (id) => {
  //   // setCharacters(...characters, example);
  //   setCharacters((oldChars) => [...oldChars, example]);
  //   console.log("Recibido el id=" + id);
  // };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        if (characters.some((chars) => chars.id === data.id)) {
          alert("El personaje ya está mostrandose en pantalla")
        } else {
          setCharacters((oldChars) => [...oldChars, data])
        }
      } else {
        window.alert("¡No hay personajes con este ID!")
        console.log(id)
      }
    })
  }

  function onClose(id) {
    console.log("entra al onClose()")
    setCharacters(
      characters.filter((_char) => {
        return _char.id !== Number(id)
      })
    )
    console.log(id)
  }

  function onRandom() {
    onSearch(Math.floor(Math.random() * 820) + 1)
  }

  return (
    <div className="App">
      {pathname != "/" ? <Nav onSearch={onSearch} onRandom={onRandom} /> : null}
      <Routes>
        {/* <Route path="*" element={<Nav onSearch={onSearch} />} /> */}
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>No existe la página</h1>} />
      </Routes>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {/* <Cards characters={characters} onClose={onClose} /> */}
    </div>
  )
}

export default App
