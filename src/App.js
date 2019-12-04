import React, { Component} from 'react';
import './App.css';
import { Link , Switch , Route } from "react-router-dom";
import Login from "./components/login";
import dashboard from "./components/dashboard";
import Logout from "./components/logout";


export default class App extends Component {
  render(){
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/dashboard" component={dashboard}/>
      <Route path="/logout" component={Logout}/>
      
    </Switch>
  );
 }
}