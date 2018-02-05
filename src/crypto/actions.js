import 'whatwg-fetch';

export const REQUEST = 'REQUEST';
export const RECEIVE_CRYPTOS = 'RECEIVE_CRYPTOS';
export const RECEIVE_CRYPTO = 'RECEIVE_CRYPTO';

export const request = () => ({
  type: REQUEST,
});

export const receiveCryptos = list => ({
  type: RECEIVE_CRYPTOS,
  list,
});

export const fetchCryptos = currency => dispatch => {
  dispatch(request());
  fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}`)
    .then(res => res.json())
    .then(data => dispatch(receiveCryptos(data)));
};

export const receiveCrypto = item => ({
  type: RECEIVE_CRYPTO,
  item,
});

export const fetchCrypto = (crypto, currency) => dispatch => {
  dispatch(request());
  fetch(`https://api.coinmarketcap.com/v1/ticker/${crypto}/?convert=${currency}`)
    .then(res => res.json())
    .then(data => dispatch(receiveCrypto(data)));
};
