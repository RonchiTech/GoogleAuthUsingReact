import _ from 'lodash';
import * as actionType from '../actions/actionTypes';

const initialState = {  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.FETCH_STREAMS:
      //Object.keys(colors).map(color =>
      // {
      // return {
      // [colors[color].id]: colors[color]}
      // })
      // console.log(_.mapKeys(action.payload, 'id'));
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case actionType.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default reducer;
