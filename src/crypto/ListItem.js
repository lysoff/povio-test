import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css'

export default class Crypto extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    currency: PropTypes.string,
  };

  render() {
    const { item, currency } = this.props;
    const props = [
      'rank',
      'symbol',
      `24h_volume_${currency.toLowerCase()}`,
      `price_${currency.toLowerCase()}`
    ];

    return (
      <Link
        className={styles.crypto}
        to={`/${item.id}`}
      >
        {props.map(prop => (
          <div
            key={prop}
            className={styles.crypto__cell}
          >
            {item[prop]}
          </div>
        ))}
      </Link>
    );
  }
}
