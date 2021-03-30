import * as actionType from '../actions/actionTypes';
// import { combineReducers } from 'redux';
const initialState = { isSignedIn: null, userId: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.id,
      };
    case actionType.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};
export default reducer;
