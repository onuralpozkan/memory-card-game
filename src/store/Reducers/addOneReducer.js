import * as actionTypes from "../Actions/actionTypes";
import {initialState} from './initialState'
const addOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ONE:
      return { ...state, point: initialState.point + 1 };
    default:
      return state;
  }
};

export default addOneReducer;