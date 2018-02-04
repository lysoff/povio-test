import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const currencies = ['USD', 'EUR', 'CNY'];

@connect()
export default class Settings extends React.Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        {currencies.map(currency => (
          <div
            key={currency}
            onClick={() => dispatch({
              type: 'SETTINGS/CHANGE-CURRENCY',
              currency,
            })}
          >{currency}</div>
        ))}
      </div>
    );
  }
}
