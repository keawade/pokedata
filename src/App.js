import React, { Component } from 'react';
import Search from './components/Search';
import Viewer from './components/Viewer';
import History from './components/History';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  selectPokemon = (e, id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  render() {
    return (
      <div className="App">
        <Search selectFunction={this.selectPokemon} />
        <Viewer current={this.state.list[0]} />
        <History list={this.state.list} />
      </div>
    );
  }
}

export default App;
