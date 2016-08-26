import React, { Component } from 'react'
import { Dropdown } from 'stardust'

class Search extends Component {
  constructor(props) {
    super(props)

    let temp = this.props.pokemon.map(poke => {
      return {
        value: poke.id,
        text: poke.name
      }
    })

    this.state = {
      options: temp
    }
  }

  render() {
    return (
      <div className="App-search">
        <Dropdown
          fluid
          selection
          multiple={false}
          search={true}
          options={this.state.options}
          placeholder='Search for a Pokémon!'
          onChange={this.props.selectFunction}
          loading={this.props.loading}
          />
      </div>
    )
  }
}

export default Search
