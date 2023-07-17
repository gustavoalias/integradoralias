import { ADDFAVORITE, DELETEFAVORITE } from "../actions/types";

const initialGlobalState = {
  favorites: [],
  characters: [],
  access: false,
  detail: {},
};

export default function rootReducer(state = initialGlobalState, action) {
  // Nos fijabamos por el TYPE de la accion
  switch (action.type) {
    case ADDFAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case DELETEFAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return { ...state };
  }
}
