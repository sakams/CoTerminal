import React,{ Component } from 'react';
import './App.css';

import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';


import AppHeader from '../components/AppHeader';
import Login from '../components/Login';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <AppHeader position="static" color="default">
        </AppHeader>

        <Login position="static" color="default">
        </Login>

      </div>
    );
  }
}

export default withRouter(App);