import { Squad } from './../../../interfaces/squad'

export interface SquadState {
  loading: boolean
  error: boolean
  data: Squad[]
}

export enum SquadTypes {
  ADD_SQUAD = '@squad/add',
  DELETE_SQUAD = '@squad/delete',
  EDIT_SQUAD = '@squad/edit',
}
