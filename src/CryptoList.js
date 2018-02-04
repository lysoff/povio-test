import React from 'react';
import { connect } from 'react-redux';

import Crypto from './Crypto';

const LIMIT = 100;

@connect(state => ({
  list: state.crypto.list,
  loading: state.crypto.loading,
  currency: state.settings.currency,
}))
export default class CryptoList extends React.Component {
  loadCrypto = () => {
    const { currency, dispatch } = this.props;

    dispatch({ type: 'CRYPTO/LOADING' });
    fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}&limit=${LIMIT}`)
      .then(res => res.json())
      .then(data => dispatch({
        type: 'CRYPTO/FETCH',
        list: data,
      }));
  };

  componentWillMount() {
    this.loadCrypto();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      this.loadCrypto();
    }
  }

  render() {
    const { list, loading, currency } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <button onClick={this.loadCrypto}>
          Refresh
        </button>
        <div>Currency: {currency}</div>
        {list.map((item) => (
          <Crypto
            key={item.id}
            item={item}
            symbol={currency}
          />
        ))}
      </div>
    );
  }
}
