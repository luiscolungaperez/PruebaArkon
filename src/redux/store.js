import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { TasksReducer } from './tasks/reducer'
// import { rootReducer } from './rootReducer'

const initialState = {
  loading: false,
  tasks: [],
  error: ''
}

export const store = createStore(
  TasksReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger, thunk))
)
