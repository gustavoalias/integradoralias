import "./App.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
// import characters, { Rick } from "./data";

function App() {
  const [characters, setCharacters] = useState([]);
  const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const onSearch = () => {
    // setCharacters(...characters, example);
    setCharacters((oldChars) => [...oldChars, example]);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Cards characters={characters} />
    </div>
  );
}

export default App;
