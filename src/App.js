import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './ToDoContainer';

const generalWrapperStyle = {
  color: '#333'
};


class App extends Component {
  render() {
    return (
      <div style={generalWrapperStyle}>
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
