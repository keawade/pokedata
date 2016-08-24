import React, { Component } from 'react';
import Search from './components/Search';
import Viewer from './components/Viewer';
import History from './components/History';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div className="App">
        <Search />
        <Viewer current={this.state.list[0]} />
        <History list={this.state.list} />
      </div>
    );
  }
}

export default App;
