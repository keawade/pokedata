import React, { Component } from 'react';
import Search from './components/Search';
import Viewer from './components/Viewer';
import History from './components/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Viewer />
        <History />
      </div>
    );
  }
}

export default App;
