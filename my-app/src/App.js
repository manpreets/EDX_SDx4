import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './counter/counter'
import DogsApp from './dogs/dogs-app'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <hr />
        <p>Counter is here</p>
        <Counter />
        <hr />
        <hr />

        <hr />
        <hr />
        <p>Dogs list is here</p>
        <DogsApp />
        <hr />
        <hr />
        
      </div>
    );
  }
}

export default App;
