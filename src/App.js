import React, { Component } from 'react'
import Search from './components/Search'
import Viewer from './components/Viewer'
import History from './components/History'
import { pokemon } from './helpers/pokemon'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      loading: false
    }

    this.selectPokemon = this.selectPokemon.bind(this)
  }

  selectPokemon(event, id) {
    console.log('[pokeman] selected pokemon', id)
    let selected
    for (var i = 0; i < pokemon.length; i++) {
      if (pokemon[i].id === id) {
        selected = pokemon[i]
        break;
      }
    }
    this.setState({
      list: [selected, ...this.state.list]
    })
  }

  componentDidMount() {
    this.selectPokemon(null, Math.floor(Math.random() * pokemon.length))
  }

  componentDidUpdate() {
    console.debug('[pokeman] pokemon list updated', this.state.list)
  }

  render() {
    return (
      <div className="App">
        <Search pokemon={pokemon} selectFunction={this.selectPokemon} />
        <Viewer current={this.state.list[0]} />
        <History list={this.state.list} />
      </div>
    );
  }
}

export default App;
