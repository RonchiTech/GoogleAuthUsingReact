import * as actionTypes from './actionTypes';
import streams from '../../apis/stream';
export const signIn = (id) => {
  return {
    type: actionTypes.SIGN_IN,
    id,
  };
};
export const signOut = () => {
  return { type: actionTypes.SIGN_OUT };
};

export const createStream = (formValues) => {
  return async (dispatch) => {
    streams.post('/streams', formValues);
  };
};
