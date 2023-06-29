import "./App.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
// import characters, { Rick } from "./data";

function App() {
  const [characters, setCharacters] = useState([]);
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
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    event.preventDefault();
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
