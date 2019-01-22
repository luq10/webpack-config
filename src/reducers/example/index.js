import { combineReducers } from 'redux';

import get from './get';
import remove from './remove';

export default combineReducers({
  get,
  remove,
});
