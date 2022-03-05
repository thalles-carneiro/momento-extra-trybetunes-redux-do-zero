import {
  ADD_FAVORITE_SONG,
  REMOVE_FAVORITE_SONG,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  songs: [],
};

const favorite = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload], // state.songs.concat(action.payload)
      };
    case REMOVE_FAVORITE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.trackId !== action.payload),
      };
    default:
      return state;
  }
};

export default favorite;
