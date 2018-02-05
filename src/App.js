import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import CryptoList from './CryptoList';
import Settings from './Settings';
import Details from './Details';

import styles from './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link
              className={styles.navigation}
              to="/"
            >Back</Link>
            <Link
              className={styles.navigation}
              to="/settings"
            >Settings</Link>
          </div>
          <Switch>
            <Route
              exact
              path={`/`}
              component={CryptoList}
            />
            <Route
              path={`/settings`}
              component={Settings}
            />
            <Route
              path={`/:id`}
              component={Details}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
