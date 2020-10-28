import { combineReducers } from 'redux'
import { TasksReducer } from './tasks/reducer'

export const rootReducer = combineReducers({
  tasks: TasksReducer
})
