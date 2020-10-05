import React,{ Component } from 'react';
import './App.css';

//import { Row, Col } from 'antd';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';


import AppHeader from '../components/AppHeader';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <AppHeader position="static" color="default">
        </AppHeader>
        
      </div>
    );
  }
}

export default withRouter(App);