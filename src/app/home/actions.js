import { get } from '../../utils/fetcher';
import * as types from './actionTypes';

export function getItemList() {
  return (dispatch) => {
    dispatch({
      type: types.GET_ITEM_LIST_PENDING
    });
    get('mockapi/getItemList.json')
      .then(response => {
        if (response.success) {
          dispatch({
            type: types.GET_ITEM_LIST_SUCCESS,
            payload: {
              itemList: response.itemList
            }
          });
        } else {
          dispatch({
            type: types.GET_ITEM_LIST_ERROR,
            payload: {
              error: response.error
            }
          });
        }
      })
  }
}

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
