const initialState = {
  list: [],
  loading: false,
};

const crypto = (state = initialState, action) => {
  if (action.type === 'CRYPTO/FETCH') {
    return {
      list: action.list,
      loading: false,
    }
  } else if (action.type === 'CRYPTO/LOADING') {
    return {
      ...state,
      loading: true,
    }
  } else {
    return state;
  }
};

export default crypto;
