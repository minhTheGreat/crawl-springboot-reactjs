import * as types from '../Config/authConstant';
import API from '../utils/api';
import history from '../Config/history';
import axios from 'axios'

export const getUser = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('authentication'));
  dispatch({ type: types.GET_USER, payload: user })

}
const loginRequest = (userID) => async (dispatch) => {
  try {
    const response = await API.get(`/userany/${userID}`)
    localStorage.setItem(
      'authentication',
      JSON.stringify({ id: response.data.id, name: response.data.username, avatar: response.data.avatar }),
    )
    dispatch({ type: types.GETALL_SUCCESS })
    history.push('/manager')
  }
  catch (err) {
    if (err.response.status === 400) {
      window.location.reload()
    }
    dispatch({ type: types.GETALL_FAILURE, payload: err.message })
  }
}
export const login = (usernameOrEmail, password) => async (dispatch) => {
  try {
    const { data } = await API.post('/auth/signin', { usernameOrEmail, password })
    await localStorage.setItem('accessToken', data.accessToken)
    
   // window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
    dispatch({ type: types.LOGIN_SUCCESS, payload: data })
    dispatch(loginRequest(data.userID))
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
  }

}
export const register = (name, username, email, password) => async (dispatch) => {
  try {
    await API.post('/auth/signup', { name, username, email, password })

    dispatch({ type: types.REGISTER_SUCCESS })
    history.push('/login', { register: 'success' })

  } catch (err) {
    //const {data}=await API.post('/auth/signup', { name, username, email, password })
    dispatch({ type: types.REGISTER_FAILURE, payload: err.message })
  }
}

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('authentication')
    localStorage.removeItem('token')
    dispatch({ type: types.LOGOUT })
    history.push('/login')
  } catch (err) {
    if (err.response.status === 401) {
      history.push('/login')
    }
    console.log(err)
  }
}
