import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css'

export default class Crypto extends React.Component {
  render() {
    const { item, symbol } = this.props;
    const props = [
      'rank',
      'symbol',
      `24h_volume_${symbol.toLowerCase()}`,
      `price_${symbol.toLowerCase()}`
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
