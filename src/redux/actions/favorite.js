import {
  ADD_FAVORITE_SONG,
  REMOVE_FAVORITE_SONG,
} from './actionTypes';

export const addFavoriteSong = (song) => ({
  type: ADD_FAVORITE_SONG,
  payload: song,
});

export const removeFavoriteSong = (songId) => ({
  type: REMOVE_FAVORITE_SONG,
  payload: songId,
});
