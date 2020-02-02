import React, { Component } from 'react';
import DataInput from './components/input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <DataInput/>
        </div>
      </div>
    );
  }
}

export default App;
