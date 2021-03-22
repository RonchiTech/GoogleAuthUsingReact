import * as actionType from '../actions/actionTypes';
// import { combineReducers } from 'redux';
const initialState = { isSignedIn: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    case actionType.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
      };
    default:
      return state;
  }
};
export default reducer;
