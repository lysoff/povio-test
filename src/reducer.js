import { combineReducers } from 'redux';

import crypto from './reducers/crypto';
import settings from './reducers/settings';

export default combineReducers({
  settings,
  crypto
});
