import React, { Component } from 'react';
import DataInput from './components/input'
import DataOutput from './components/output'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <DataInput/>
          <DataOutput/>
        </div>
      </div>
    );
  }
}

export default App;
