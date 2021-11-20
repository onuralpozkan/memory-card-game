import * as actionTypes from '../Actions/actionTypes';
import {initialState} from './initialState'
const resetPointsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.RESET_POINTS:
      return { ...state, point: 0 };
    default:
      return state;
  }
}

export default resetPointsReducer;