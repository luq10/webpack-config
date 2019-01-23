import { combineReducers } from 'redux';

import get from './get';
import remove from './remove';
import data from './data';

export default combineReducers({
  get,
  remove,
  data,
});
