import React, { Component } from 'react';
import './App.css';
import AppContainer from './pages/layout/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import routes from './config/routes'
class App extends Component {
  render() {
    return (
      <div className="App">
       <AppContainer />

      </div>
    );
  }
}

export default App;
