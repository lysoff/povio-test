import { RECEIVE_CRYPTO, RECEIVE_CRYPTOS, REQUEST } from './actions';

const initialState = {
  list: [],
  entities: {},
  loading: false,
};

const crypto = (state = initialState, action) => {
  if (action.type === REQUEST) {
    return {
      ...state,
      loading: true,
    }
  } else if (action.type === RECEIVE_CRYPTOS) {
    const list = [];
    const entities = {};

    action.list.forEach(item => {
      list.push(item.id);
      entities[item.id] = item;
    });

    return {
      list,
      entities,
      loading: false,
    }
  } else if (action.type === RECEIVE_CRYPTO) {
    return {
      ...state,
      entities: {
        ...state.entities,
        [action.item.id]: action.item,
      },
      loading: false,
    }
  } else {
    return state;
  }
};

export default crypto;
