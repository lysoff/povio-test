import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css'

export default class Crypto extends React.Component {
  render() {
    const { item, symbol } = this.props;

    return (
      <Link
        className={styles.crypto}
        to={`/${item.id}`}
      >
        <div className={styles.crypto_cell}>{item.rank}</div>
        <div className={styles.crypto_cell}>{item.symbol}</div>
        <div className={styles.crypto_cell}>{item[`24h_volume_${symbol.toLowerCase()}`]}</div>
        <div className={styles.crypto_cell}>{item[`price_${symbol.toLowerCase()}`]}</div>
      </Link>
    );
  }
}
