import {
  ADD_FAV,
  GET_DATA,
  REMOVE_FAV,
  ORDER,
  FILTER,
  ORIGINAL,
} from "../actions/types";

export const addFav = (obj) => {
  return { type: ADD_FAV, payload: obj };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const getCharacters = () => {
  return async function (dispatch) {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);

    const responsJson = await response.json();

    try {
      dispatch({ type: GET_DATA, payload: responsJson });
    } catch (err) {
      console.log(err.message);
    }
  };

  /*return function (dispatch)
    {
       fetch(`https://rickandmortyapi.com/api/character/`).then((response)=> response.json())
       .then((data)=> 
            dispatch({type: GET_DATA,payload:data})
       )
    } */
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export const original = () => {
  return { type: ORIGINAL };
};

// import axios from "axios";
// import { ADDFAVORITE, DELETEFAVORITE } from "./types";

// // ACTION | addFav
// export const addFavorite = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: "ADD",
//         payload: data,
//       });
//     });
//   };
// };

// // ACTION | removeFav
// export const deleteFavorite = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "DELETE",
//         payload: data,
//       });
//     });
//   };
// };

// //Antes de conectar el back cn el front
// // import { ADDFAVORITE, DELETEFAVORITE } from "./types";
// // // Actions creators
// // export function addFavorite(character) {
// //   return { type: ADDFAVORITE, payload: character };
// // }

// // export function deleteFavorite(id) {
// //   return { type: DELETEFAVORITE, payload: id };
// // }
