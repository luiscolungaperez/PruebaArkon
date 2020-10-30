import axios from 'axios'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from './types'

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

const registerSuccess = (payload) =>{
  return {
    type: REGISTER_SUCCESS,
    payload
  }
}

const registerFailure = (payload) =>{
  return {
    type: REGISTER_FAILURE,
    payload
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get('https://5f9849be42706e00169583b4.mockapi.io/api/v1/tasks')
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch(({ message }) => dispatch(fetchFailure(message)))
  }
}

export const addTasks = (data) => {
  return (dispatch) => {
    axios.post(
      'https://5f9849be42706e00169583b4.mockapi.io/api/v1/tasks',
      data
    )
      .then(({ data }) => dispatch(registerSuccess(data)))
      .catch(({ message }) => dispatch(registerFailure(message)))
  }
}

export const putTask = (data) => {
  return (dispatch) => {
    console.log(data)
    axios.put(
      `https://5f9849be42706e00169583b4.mockapi.io/api/v1/tasks/${data.id}`,
      data
    )
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .then(() => location.reload())
      .catch(({ message }) => dispatch(fetchFailure(message)))
  }
}
