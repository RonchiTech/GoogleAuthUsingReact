import * as actionTypes from './actionTypes';
import streams from '../../apis/stream';
import history from '../../history';

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
  return async (dispatch, getState) => {
    // console.log(getState());
    const { userId } = getState().auth;
    const { data } = await streams.post('/streams', { ...formValues, userId });
    dispatch({
      type: actionTypes.CREATE_STREAM,
      payload: data,
    });
    history.push('/');
  };

  //Programmic Navigation
  //Get user back to root route
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const { data } = await streams.get('/streams');
    // console.log(data);
    dispatch({
      type: actionTypes.FETCH_STREAMS,
      payload: data,
    });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const { data } = await streams.get(`/streams/${id}`);
    dispatch({
      type: actionTypes.FETCH_STREAM,
      payload: data,
    });
  };
};

export const updateStream = (id, updatedValues) => {
  return async (dispatch) => {
    const { data } = await streams.patch(`/streams/${id}`, updatedValues);
    dispatch({
      type: actionTypes.UPDATE_STREAM,
      payload: data,
    });
    history.push('/')
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: actionTypes.DELETE_STREAM,
      payload: id,
    });
     history.push('/');
  };
};
