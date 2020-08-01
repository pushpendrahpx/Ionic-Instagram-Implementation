import { combineReducers } from 'redux';

import sampleReducers from './sample';
import userReducers from './user';

export default combineReducers({
    sampleReducers,
    userReducers
  });