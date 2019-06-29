import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Layout } from './components';
import '../localization';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Automation Framework" component={Layout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;