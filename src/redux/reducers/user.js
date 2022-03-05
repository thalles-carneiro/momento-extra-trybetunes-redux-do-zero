import {
  CREATE_USER,
  UPDATE_USER,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  image: '',
  description: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
