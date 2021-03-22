import * as actionType from '../actions/actionTypes';
// import { combineReducers } from 'redux';
const initialState = { isSignedIn: null, id: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        id: action.id,
      };
    case actionType.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        id: null,
      };
    default:
      return state;
  }
};
export default reducer;
