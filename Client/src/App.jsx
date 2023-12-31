import "./App.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import characters, { Rick } from "./data";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456";
  const Navigate = useNavigate();

  useEffect(() => {
    !access && Navigate("/");
  }, [access]);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && Navigate("/home");
    });
  }

  // Antes de conectarl back con el front
  // function login(userData) {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //     Navigate("/home");
  //   }
  // }

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

  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //     ({ data }) => {
  //       console.log(typeof data);
  //       if (data[0]) {
  //         if (characters.some((chars) => chars.id === data[0].id)) {
  //           alert("El personaje ya está mostrandose en pantalla");
  //         } else {
  //           setCharacters((oldChars) => [...oldChars, data[0]]);
  //         }
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //         console.log(id);
  //       }
  //     }
  //   );
  // }

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${Number(id)}`)
      .then(({ data }) => {
        if (data) {
          if (characters.some((chars) => chars.id === id)) {
            alert("El personaje ya está mostrándose en pantalla");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
          console.log(id);
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function onClose(id) {
    console.log("entra al onClose()");
    setCharacters(
      characters.filter((_char) => {
        return _char.id !== Number(id);
      })
    );
    console.log(id);
  }

  function onRandom() {
    onSearch(Math.floor(Math.random() * 820) + 1);
  }

  return (
    <div className="App">
      {pathname != "/" ? <Nav onSearch={onSearch} onRandom={onRandom} /> : null}
      <Routes>
        {/* <Route path="*" element={<Nav onSearch={onSearch} />} /> */}
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>No existe la página</h1>} />
      </Routes>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {/* <Cards characters={characters} onClose={onClose} /> */}
    </div>
  );
}

export default App;
