import React, { Component } from 'react';
import '../App.css';
import { Dropdown } from 'stardust';
import * as PokemonList from '../data/pokemon'

class Search extends Component {
  render() {
    return (
      <div className="App-search">
        <Dropdown
          fluid
          selection
          multiple={false}
          search={true}
          options={PokemonList}
          value={[]}
          placeholder='Gender'
          disabled={false}
          loading={false}
        />
      </div>
    );
  }
}

export default Search;
