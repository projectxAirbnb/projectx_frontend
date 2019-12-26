import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';
import ROUTES from './configs/routes';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={ROUTES.HOME()} component={pages.SelfCheck} />
          <Route exact path={ROUTES.LOGIN()} component={pages.Login} />
          {/* <Route exact path={ROUTES.HOME()} component={pages.Home} /> */}
          <Route exact path={ROUTES.DEVELOPER(':name')} component={pages.Developer} />
          <Route component={pages.Error404} />
        </Switch>
      </main>
    );
  }
}
