// @flow
import React from 'react'
import leftPad from 'left-pad'

type Props = {
  pokemon: Array<Object>,
  selectFunction: (event: any) => void,
}

const History = (props: Props) => {
  console.log('[History] length', props.pokemon.length)
  if (props.pokemon.length > 1) {
    return (
      <div className='App-history'>
        <div className='ui four column stackable grid container'>
          {props.pokemon.map((poke, index) => {
            if (index === 0) {
              return null
            } else {
              const id = leftPad(poke.id, 3, 0)
              return (
                <div key={poke.id} className='column'>
                  <a onClick={() => { props.selectFunction(null, poke.id) } }>
                    <div className='ui card'>
                      <div className='image'>
                        <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt={poke.name} />
                      </div>
                      <div className='content'>
                        <div className='header'>{id}- {poke.name}</div>
                        <div className='description'>
                          {poke.types.map((type) => (<i key={type} className={`circle icon ${type}`.toLowerCase()}></i>))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  } else {
    return <div className='poke-hidden' />
  }
}

export default History;
