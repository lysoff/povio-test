import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.css';
import {fetchCrypto} from "./actions";

@connect((state, { match }) => ({
  data: state.crypto.entities[match.params.id],
  loading: state.crypto.loading,
  currency: state.settings.currency,
}))
export default class Details extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    currency: PropTypes.string,
  };

  loadCrypto = () => {
    const { dispatch, currency, match } = this.props;

    dispatch(fetchCrypto(match.params.id, currency));
  };

  componentWillMount() {
    const { data } = this.props;

    if (!data) {
      this.loadCrypto();
    }
  }

  render() {
    const { data, currency, loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    const labels = {
      rank: 'Rank',
      name: 'Name',
      symbol: 'Symbol',
      [`24h_volume_${currency.toLowerCase()}`]: `24h volume`,
      [`market_cap_${currency.toLowerCase()}`]: `Market cap`,
      price_btc: 'Price in bitcoin',
      percent_change_1h: '1h change',
      percent_change_24h: '24h change',
      percent_change_7d: '7d change',
      total_supply: 'Total supply',
      available_supply: 'Available supply',
    };

    return (
      <div>
        <button onClick={this.loadCrypto}>Refresh</button>
        {Object.keys(labels).map(key =>
          <div key={key} className={styles.row}>
            <div className={styles.label}>{labels[key]}</div>
            <div className={styles.value}>{data[key]}</div>
          </div>
        )}
      </div>
    );
  }
}
