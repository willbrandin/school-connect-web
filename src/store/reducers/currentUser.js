import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false, //true when user is logged in
  user: {} //all user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: 
      return{
        isAuthenticated: Boolean(Object.keys(action.user).length > 0),
        user: action.user
      };
    default:
      return state;
  }
};