import React, { Component } from 'react';
import { calculateStrengths, renderType } from '../helpers/helpers'
import leftPad from 'left-pad'

class Viewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weaknesses: [],
      resistances: [],
      immunities: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const strengths = calculateStrengths(nextProps.pokemon.types.map(type => { return type.toLowerCase() }))
    let weaknesses = []
    let resistances = []
    let immunities = []

    for (let item in strengths) {
      if (strengths[item] >= 2) {
        weaknesses.push(item)
      }
      if (0.25 === strengths[item] || strengths[item] === 0.5) {
        resistances.push(item)
      }
      if (strengths[item] === 0) {
        immunities.push(item)
      }
    }

    this.setState({ weaknesses, resistances, immunities })
  }

  render() {
    console.debug('[Viewer] state', this.state)
    if (this.props.pokemon !== undefined) {
      let id = leftPad(this.props.pokemon.id, 3, 0)
      return (
        <div className='ui segments'>
          <div className='ui center aligned segment'>
            <h1 className='ui huge header'>#{id} - {this.props.pokemon.name}</h1>
          </div>
          <div className='ui segment'>
            <div className='ui two column divided stackable grid'>
              <div className='row'>
                <div className='column'>
                  <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={this.props.pokemon.name} />
                </div>
                <div className='column'>
                  <h3 className='ui dividing header'>Type</h3>
                  {this.props.pokemon.types.map(renderType) }
                  <h3 className='ui dividing header'>Weaknesses</h3>
                  {this.state.weaknesses.map(renderType) }
                  <h3 className='ui dividing header'>Resistances</h3>
                  {this.state.resistances.map(renderType) }
                  <h3 className='ui dividing header'>Immunities</h3>
                  {this.state.immunities.map(renderType) }
                </div>
              </div>
            </div>
          </div>
          <div className='ui center aligned segment'>
            Fork me on <a href='https://github.com/keawade/pokedata' target='_blank'>GitHub</a>
          </div>
        </div>
      );
    } else {
      return <div />
    }
  }
}

export default Viewer;
