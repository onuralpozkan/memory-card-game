
import * as actionTypes from './actionTypes';
export const addOnePoint = () => {
  return {
    type: actionTypes.ADD_ONE,
    payload: 1,
  };
};
