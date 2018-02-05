import {CHANGE_CURRENCY} from "../actions";

const initialState = {
  currency: 'USD'
};

const settings = (state = initialState, action) => {
  if (action.type === CHANGE_CURRENCY) {
    return {
      currency: action.currency,
    }
  } else {
    return state;
  }
};

export default settings;
