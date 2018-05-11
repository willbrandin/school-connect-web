import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { resolve } from 'dns';
import { rejects } from 'assert';

export function setCurrentUser(user){
  return{
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `api/auth/${type}`, userData)
      .then(data => {
        localStorage.setItem("jwtToken", data.token)
        localStorage.setItem("school", data.school)
        dispatch(setCurrentUser(user));
        resolve();
      })
    })
  }
} 