import React, { Component } from 'react';
import './App.css';
import Pages from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/dashboard"><h4>Click Me</h4></Link>
        <Switch>
          <Route exact path="/dashboard" component={Pages.Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
