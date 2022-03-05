import {
  REQUEST_MUSICS,
  GET_MUSICS_SUCCESS,
  GET_MUSICS_ERROR,
} from './actionTypes';

import getMusics from '../../services/musicsAPI';

const requestMusics = () => ({
  type: REQUEST_MUSICS,
});

const getMusicsSuccess = (musics) => ({
  type: GET_MUSICS_SUCCESS,
  payload: musics,
});

const getMusicsError = (error) => ({
  type: GET_MUSICS_ERROR,
  payload: error,
});

export const fetchMusics = (id) => async (dispatch) => {
  dispatch(requestMusics());

  try {
    const [, ...musics] = await getMusics(id);
    dispatch(getMusicsSuccess(musics));
  } catch (error) {
    dispatch(getMusicsError(error.message));
  }
};
