import { ADDFAVORITE, DELETEFAVORITE } from "./types";
// Actions creators
export function addFavorite(character) {
  return { type: ADDFAVORITE, payload: character };
}

export function deleteFavorite(id) {
  return { type: DELETEFAVORITE, payload: id };
}
