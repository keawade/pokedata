import { types } from './types'

export function calculateStrengths(givenTypes) {
  let strengths = {}
  if (givenTypes.length === 2) {
    strengths = {
      normal: types.normal[givenTypes[0]] * types.normal[givenTypes[1]],
      fire: types.fire[givenTypes[0]] * types.fire[givenTypes[1]],
      water: types.water[givenTypes[0]] * types.water[givenTypes[1]],
      electric: types.electric[givenTypes[0]] * types.electric[givenTypes[1]],
      grass: types.grass[givenTypes[0]] * types.grass[givenTypes[1]],
      ice: types.ice[givenTypes[0]] * types.ice[givenTypes[1]],
      fighting: types.fighting[givenTypes[0]] * types.fighting[givenTypes[1]],
      poison: types.poison[givenTypes[0]] * types.poison[givenTypes[1]],
      ground: types.ground[givenTypes[0]] * types.ground[givenTypes[1]],
      flying: types.flying[givenTypes[0]] * types.flying[givenTypes[1]],
      psychic: types.psychic[givenTypes[0]] * types.psychic[givenTypes[1]],
      bug: types.bug[givenTypes[0]] * types.bug[givenTypes[1]],
      rock: types.rock[givenTypes[0]] * types.rock[givenTypes[1]],
      ghost: types.ghost[givenTypes[0]] * types.ghost[givenTypes[1]],
      dragon: types.dragon[givenTypes[0]] * types.dragon[givenTypes[1]],
      dark: types.dark[givenTypes[0]] * types.dark[givenTypes[1]],
      steel: types.steel[givenTypes[0]] * types.steel[givenTypes[1]],
      fairy:  types.fairy[givenTypes[0]] * types.fairy[givenTypes[1]]
    }
  } else {
    strengths = {
      normal: types.normal[givenTypes[0]],
      fire: types.fire[givenTypes[0]],
      water: types.water[givenTypes[0]],
      electric: types.electric[givenTypes[0]],
      grass: types.grass[givenTypes[0]],
      ice: types.ice[givenTypes[0]],
      fighting: types.fighting[givenTypes[0]],
      poison: types.poison[givenTypes[0]],
      ground: types.ground[givenTypes[0]],
      flying: types.flying[givenTypes[0]],
      psychic: types.psychic[givenTypes[0]],
      bug: types.bug[givenTypes[0]],
      rock: types.rock[givenTypes[0]],
      ghost: types.ghost[givenTypes[0]],
      dragon: types.dragon[givenTypes[0]],
      dark: types.dark[givenTypes[0]],
      steel: types.steel[givenTypes[0]],
      fairy:  types.fairy[givenTypes[0]]
    }
  }
  return strengths
}