import React,{ Component } from 'react';
import './App.css';

import {
  Route,
  withRouter,
  Switch,
 
} from 'react-router-dom';


import AppHeader from '../components/AppHeader';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class App extends Component {

  render() {
    return (

      <div className="app-container">
        <AppHeader position="static" color="default">
        </AppHeader>

      
         <Route exact path='/SignUp' component={SignUp}></Route>
        
       
        
         <Route exact path='/' component={Login}></Route>  
        
      </div>
      
    );
  }
}

export default withRouter(App);