import * as actionTypes from '../Actions/actionTypes';
import { initialState } from './initialState';
const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_PAIR:
      return { ...state, isCorrect: true };
    case actionTypes.RESET_STATE:
      return { ...state, isCorrect: false };
    default:
      return state;
  }
};

export default cardReducers;
