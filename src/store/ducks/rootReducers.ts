import { combineReducers } from 'redux'

import users from './user'
import squad from './squad'

const reducers = combineReducers({
  users,
  squad,
})

export default reducers
