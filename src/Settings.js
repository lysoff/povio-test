import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeCurrency } from './actions';

import styles from './styles.css';

const currencies = ['USD', 'EUR', 'CNY'];

@connect(state => ({
  currency: state.settings.currency,
}))
export default class Settings extends React.Component {
  render() {
    const { dispatch, currency } = this.props;

    return (
      <div>
        {currencies.map(item => (
          <div
            className={classNames(styles.currency, {
              [styles.currency_active]: currency === item
            })}
            key={item}
            onClick={() => dispatch(changeCurrency(item))}
          >{item}</div>
        ))}
      </div>
    );
  }
}
