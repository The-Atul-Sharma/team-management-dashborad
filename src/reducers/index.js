import { combineReducers } from 'redux';
import members from './members';

export const rootReducer = combineReducers({
  members,
});