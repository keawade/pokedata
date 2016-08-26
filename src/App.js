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
    let pos = -1
    const selected = pokemon.find((poke, index) => {
      if (poke.id === id) {
        pos = index
        return true
      } else {
        return false
      }
    })

    this.setState({ //setState is async, we may set scrollTo before we set state and rerender
      list: (pos > -1)
        ? [selected, ...list.slice(0, pos), ...list.slice(pos, list.length-1)]
        : [selected, ...list]
    })
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.selectPokemon(null, Math.ceil(Math.random() * pokemon.length))
  }

  componentDidUpdate() {
    console.debug('[pokeman] pokemon list updated', this.state.list)
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
