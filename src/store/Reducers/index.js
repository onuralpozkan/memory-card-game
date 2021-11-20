import { combineReducers } from 'redux';
import cardReducers from './cardReducers';
const rootReducer = combineReducers({
  cardReducers,
});

export default rootReducer;
