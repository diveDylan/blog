import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './pages/layout/index'

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
