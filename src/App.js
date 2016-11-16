// @flow
import React, { Component } from 'react'
import Search from './components/Search'
import Viewer from './components/Viewer'
import History from './components/History'
import { pokemon } from './helpers/pokemon'

type Pokemon = {
    id: number,
    name: string,
    types: Array<string>,
}

class App extends Component {
  props: {}

  state: {
    list: Array<Pokemon>,
  }

  constructor(props: {}) {
    super(props)

    this.state = {
      list: [],
    }
  }

  selectPokemon = (id: number): void => {
    let pos = -1
    const selected = pokemon.find((poke, index) => {
      if (poke.id === id) {
        pos = index
        return true
      } else {
        return false
      }
    })

    if (pos > -1) {
      let tempList = this.state.list.slice(0)
      tempList.splice(pos, 1)
      this.setState({
        list: [selected, ...tempList]
      })
    } else {
      this.setState({
        list: [selected, ...this.state.list]
      })
    }
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.selectPokemon(Math.ceil(Math.random() * 151))
  }

  componentDidUpdate() {
    // console.debug('[pokedata] pokemon list updated', this.state.list)
  }

  render() {
    return (
      <div className="ui container">
        <Search pokemon={pokemon} selectFunction={this.selectPokemon} />
        <Viewer pokemon={this.state.list[0]} history={this.state.list.length}/>
        <History pokemon={this.state.list} selectFunction={this.selectPokemon} />
      </div>
    );
  }
}

export default App;
