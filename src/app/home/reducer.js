import * as types from './actionTypes';

const initialState = {
  currentId: 1,
  itemList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
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