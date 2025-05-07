import { combineReducers } from 'redux';
import jokeReducer from './jokeSlice';
import filterSlice from './filterSlice';

export default combineReducers({
  jokes: jokeReducer,
  filter: filterSlice
});