// @flow
import React, { Component } from 'react'
import { Dropdown } from 'stardust'

type Pokemon = {
    id: number,
    name: string,
    types: Array<string>,
}

type Props = {
  pokemon: Array<Pokemon>,
  selectFunction: (id: number) => void,
}

class Search extends Component {
  props: Props

  state: {
    options: Array<{ value: number, text: string }>
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      options: props.pokemon.map(poke => ({
        value: poke.id,
        text: poke.name
      }))
    }
  }

  shouldComponentUpdate() {
    return false
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
          onChange={(event: any, value: number) => { this.props.selectFunction(value);}}
          />
      </div>
    )
  }
}

export default Search
