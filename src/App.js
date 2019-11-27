import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import { ROUTES } from './configs';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <CssBaseline />
        <Switch>
          <Route exact path={ROUTES.HOME()} component={pages.Home} />
          <Route exact path={ROUTES.DEVELOPER(':name')} component={pages.Developer} />
          <Route component={pages.Error404} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};