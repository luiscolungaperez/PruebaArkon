import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from './types'

export const TasksReducer = (state, action) => {
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
    case REGISTER_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks.sort((a, b) => b - a).reverse(), action.payload],
        error: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        tasks: [...state.tasks],
        error: action.payload
      }
    default: 
      return state
  }
}
