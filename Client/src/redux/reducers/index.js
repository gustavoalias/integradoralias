import {
  ADD_FAV,
  GET_DATA,
  REMOVE_FAV,
  ORDER,
  FILTER,
  ORIGINAL,
} from "../actions/types";

const initialState = {
  myFavorites: [],
  characters: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      const result = state.myFavorites.filter((p) => p.id != action.payload);
      return {
        ...state,
        myFavorites: result,
        allCharacters: result,
      };
    case GET_DATA:
      return {
        ...state,
        characters: action.payload,
      };
    case FILTER:
      const resultFilter = state.allCharacters.filter(
        (p) => p.gender === action.payload
      );
      return {
        ...state,
        myFavorites: resultFilter,
      };
    case ORDER:
      const resultOrder = state.myFavorites.sort((a, b) => {
        if (a.id > b.id && action.payload === "D") return b.id - a.id;
        if (a.id < b.id && action.payload === "A") return a.id - b.id;

        return 0;
      });

      return {
        ...state,
        myFavorites: resultOrder,
      };
    case ORIGINAL:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return state;
  }
};

export default reducer;
