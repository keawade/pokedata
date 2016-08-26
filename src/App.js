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
    let selected
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].id === id) {
        selected = pokemon[i]
        break;
      }
    }

    const pos = this.state.list.indexOf(selected)
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
    this.selectPokemon(null, Math.ceil(Math.random() * pokemon.length))
  }

  componentDidUpdate() {
    console.debug('[pokeman] pokemon list updated', this.state.list)
  }

  render() {
    return (
      <div className="ui container">
        <Search pokemon={pokemon} selectFunction={this.selectPokemon} />
        <Viewer pokemon={this.state.list[0]} />
        <History pokemon={this.state.list} selectFunction={this.selectPokemon} />
      </div>
    );
  }
}

export default App;
