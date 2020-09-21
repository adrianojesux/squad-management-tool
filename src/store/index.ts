import { SquadState } from './ducks/squad/types'
import { UserState } from './ducks/user/types'
import { createStore, Store } from 'redux'

import { rootReducers } from './ducks'

export interface ApplicationState {
  users: UserState
  squad: SquadState
}

const store: Store<ApplicationState> = createStore(rootReducers)

export default store
