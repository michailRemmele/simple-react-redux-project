import { combineReducers } from 'redux';

import homeReducer from '../app/home/reducer';

const appReducer = combineReducers({
  homeReducer
});

export default (state = {}, action) => {
  return appReducer(state, action);
}