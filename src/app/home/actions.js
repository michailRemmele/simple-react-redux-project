import * as types from './actionTypes';

export function addNewValue(value) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_NEW_VALUE,
      payload: {
        value: value
      }
    })
  }
}
