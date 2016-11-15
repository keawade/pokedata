// @flow
import React from 'react'
import { Dropdown } from 'stardust'

type Props = {
  pokemon: Array<Object>,
  selectFunction: (event: any) => void,
}

class Search extends React.Component {
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
          onChange={this.props.selectFunction}
          />
      </div>
    )
  }
}

export default Search
