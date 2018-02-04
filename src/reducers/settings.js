const initialState = {
  currency: 'USD'
};

const settings = (state = initialState, action) => {
  if (action.type === 'SETTINGS/CHANGE-CURRENCY') {
    return {
      currency: action.currency,
    }
  } else {
    return state;
  }
};

export default settings;
