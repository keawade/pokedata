import React from 'react'
import { types as typesChart } from './types'

export function renderType(type) {
  const style = `type ${type}`.toLowerCase()
  const tagContent = type.toUpperCase()
  return (
    <span className={style} key={tagContent} >{tagContent}</span>
  )
}

const types = Object.keys(typesChart)

export function calculateStrengths(givenTypes) {
  return types.reduce((strengths, type) => {
    strengths[type] = givenTypes.reduce((total, givenType) => total * typesChart[type][givenType], 1)
    return strengths
  }, {})
}