import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './header';
import List from './crypto';
import Settings from './settings';
import Details from './crypto/Details';

export default () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path={`/`}
          component={List}
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

