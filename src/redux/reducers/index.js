import { combineReducers } from 'redux';

import user from './user';
import album from './album';
import favorite from './favorite';

const rootReducer = combineReducers({ user, album, favorite });

export default rootReducer;
