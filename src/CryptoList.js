import React from 'react';
import { connect } from 'react-redux';

import Crypto from './Crypto';
import { fetchCryptos } from "./actions";

@connect(state => ({
  ...state.crypto,
  currency: state.settings.currency,
}))
export default class CryptoList extends React.Component {
  loadCryptos = () => {
    const { currency, dispatch } = this.props;

    dispatch(fetchCryptos(currency));
  };

  componentWillMount() {
    this.loadCryptos();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      this.loadCryptos();
    }
  }

  render() {
    const { list, entities, loading, currency } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <button onClick={this.loadCryptos}>
          Refresh
        </button>
        {list.map((id) => (
          <Crypto
            key={id}
            item={entities[id]}
            symbol={currency}
          />
        ))}
      </div>
    );
  }
}
