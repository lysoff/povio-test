import { receiveCryptos, RECEIVE_CRYPTOS } from '../actions';
import reducer from '../reducer';

describe('Crypto test', () => {
  let action;
  let initialState;

  const list = [{
    id: 'bitcoin',
  }, {
    id: 'ethereum',
  }];

  test('receiveCryptos returns correct action', () => {
    action = receiveCryptos(list);
    expect(action).toEqual({
      type: RECEIVE_CRYPTOS,
      list,
    });
  });

  test('reducer handles RECEIVE_CRYPTOS action', () => {
    expect(reducer(initialState, action)).toEqual({
      list: ['bitcoin', 'ethereum'],
      entities: {
        bitcoin: {
          id: 'bitcoin',
        },
        ethereum: {
          id: 'ethereum',
        }
      },
      loading: false,
    });
  });
});