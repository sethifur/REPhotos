import React, { Component } from 'react';
import logo from './logo.svg';
import TabHolder from './TabHolder.js';
import './App.css';
//import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div><TabHolder /></div>
      </div>
    );
  }
}

export default App;
