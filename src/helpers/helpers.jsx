// @flow
import React from 'react'
import { types as typesChart } from './types'

export function renderType(type: string) {
  const style: string = `type ${type}`.toLowerCase()
  const tagContent: string = type.toUpperCase()
  return (
    <span className={style} key={tagContent} >{tagContent}</span>
  )
}

const types = Object.keys(typesChart)

export function calculateStrengths(givenTypes: Array<string>) {
  return types.reduce((strengths, type) => {
    strengths[type] = givenTypes.reduce((total, givenType) => total * typesChart[type][givenType], 1)
    return strengths
  }, {})
}