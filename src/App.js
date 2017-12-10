import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './ToDoContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Todo list app.</h1>
          </header>
          <p className="App-intro">
            My first <code>React</code> application.
          </p>
        </div>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
