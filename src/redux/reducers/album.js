import {
  REQUEST_MUSICS,
  GET_MUSICS_SUCCESS,
  GET_MUSICS_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  isFeathing: false,
  musics: [],
  errorMessage: '',
};

const album = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MUSICS:
      return {
        ...state,
        isFeathing: true,
      };
    case GET_MUSICS_SUCCESS:
      return {
        ...state,
        isFeathing: false,
        musics: action.payload,
      };
    case GET_MUSICS_ERROR:
      return {
        ...state,
        isFeathing: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default album;
