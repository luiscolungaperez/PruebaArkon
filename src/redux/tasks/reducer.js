import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './types'

const initialState = {
  loading: false,
  tasks: [],
  error: ''
}

export const TasksReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: [],
        error: action.payload
      }
    default: 
      return state
  }
}
