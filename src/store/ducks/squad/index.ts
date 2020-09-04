import { Reducer } from 'redux'
import { produce } from 'immer'
import { SquadState, SquadTypes } from './types'
const INITIAL_STATE: SquadState = {
  loading: false,
  error: false,
  data: [],
}

const reducer: Reducer<SquadState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SquadTypes.ADD_SQUAD:
        draft.data.push(action.payload.data)
        return { loading: false, error: false, data: [...draft.data] }
      case SquadTypes.DELETE_SQUAD:
        const i = draft.data.findIndex(
          squad =>
            squad.name.toLowerCase() === action.payload.data.name.toLowerCase()
        )
        draft.data.splice(i, 1)
        draft.loading = false
        draft.error = false
        return draft
      case SquadTypes.EDIT_SQUAD:
        const index = draft.data.findIndex(
          squad =>
            squad.name.toLowerCase() === action.payload.data.name.toLowerCase()
        )
        draft.data[index] = { ...draft.data[index], ...action.payload.data }
      default:
        return draft
    }
  })
}

export default reducer
