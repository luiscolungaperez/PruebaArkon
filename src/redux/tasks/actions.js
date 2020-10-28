import axios from 'axios'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './types'

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

const fetchSuccess = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

const fetchFailure = (payload) => {
  return {
    type: FETCH_FAILURE,
    payload
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get('https://5f9849be42706e00169583b4.mockapi.io/api/v1/tasks')
      .then(response => dispatch(fetchSuccess(response.data)))
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}