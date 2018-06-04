/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import pages from './pages';

export default () => (
  <App>
    <Switch>
      {pages.map((page, index) => {
        return <Route path={page.path} component={page.component} key={index} />
      })}
    </Switch>
  </App>
);
