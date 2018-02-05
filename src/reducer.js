import { combineReducers } from 'redux';

import crypto from './crypto/reducer';
import settings from './settings/reducer';

export default combineReducers({
  settings,
  crypto
});
