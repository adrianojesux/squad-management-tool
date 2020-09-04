import { Squad } from './../../../interfaces/squad'
import { SquadTypes } from './types'
import { action } from 'typesafe-actions'

export const addSquad = (squad: Squad) =>
  action(SquadTypes.ADD_SQUAD, { data: squad })
export const deleteSquad = (squad: Squad) =>
  action(SquadTypes.DELETE_SQUAD, { data: squad })
export const editSquad = (name: string) =>
  action(SquadTypes.EDIT_SQUAD, { data: name })
