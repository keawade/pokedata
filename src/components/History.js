import React, { Component } from 'react'
import leftPad from 'left-pad'

class History extends Component {
  constructor(props) {
    super(props)

    this.renderType = this.renderType.bind(this)
    this.renderListItem = this.renderListItem.bind(this)
  }

  renderType(type) {
    return (
      <i key={type} className={`circle icon ${type}`.toLowerCase()}></i>
    )
  }

  renderListItem(pokemon, index) {
    if (index === 0) {
      return null
    } else {
      const id = leftPad(pokemon.id, 3, 0)
      return (
        <div key={pokemon.id} className='column'>
          <a onClick={() => { this.props.selectFunction(null, pokemon.id) } }>
            <div className='ui card'>
              <div className='image'>
                <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt={pokemon.name} />
              </div>
              <div className='content'>
                <div className='header'>{id} - {pokemon.name}</div>
                <div className='description'>
                  {pokemon.types.map(this.renderType) }
                </div>
              </div>
            </div>
          </a>
        </div>
      )
    }
  }

  render() {
    console.log('[History] length', this.props.pokemon.length)
    if (this.props.pokemon.length > 1) {
      return (
        <div className='App-history'>
          <div className='ui four column stackable grid container'>
            {this.props.pokemon.map(this.renderListItem) }
          </div>
        </div>
      )
    } else {
      return <div className='poke-hidden' />
    }
  }
}

export default History;
