import React, { Component } from 'react';
import '../App.css';
import { Dropdown } from 'stardust';
import { pokemon } from '../data/pokemon'

class Search extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.debug(pokemon)
    return (
      <div className="App-search">
        <Dropdown
          fluid
          selection
          multiple={false}
          search={true}
          options={pokemon}
          placeholder='Search for a Pokémon!'
          onChange={this.props.selectFunction}
          />
      </div>
    );
  }
}

export default Search;
