import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default () => (
  <div>
    <Link
      className={styles.navigation}
      to="/"
    >Home</Link>
    <Link
      className={styles.navigation}
      to="/settings"
    >Settings</Link>
  </div>
);
