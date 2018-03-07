import * as types from './actionTypes';

const initialState = {
  currentId: 5,
  itemList: [],
  itemListPending: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEM_LIST_PENDING: {
      return {
        ...state,
        itemListPending: true,
        error: null
      }
    }
    case types.GET_ITEM_LIST_SUCCESS: {
      return {
        ...state,
        itemList: action.payload.itemList,
        itemListPending: false,
        error: null
      }
    }
    case types.GET_ITEM_LIST_ERROR: {
      return {
        ...state,
        itemListPending: false,
        error: action.payload.error
      }
    }
    case types.ADD_NEW_VALUE: {
      return {
        ...state,
        itemList: [
          ...state.itemList,
          {
            id: state.currentId++,
            value: action.payload.value
          }
        ]
      }
    }
    default: {
      return state;
    }
  }
}