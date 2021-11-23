import * as actionTypes from './actionTypes';

export const foundCorrectPair = () => {
  return {
    type: actionTypes.CORRECT_PAIR,
  };
};
export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE,
  };
};
export const completeState = () => {
  return {
    type: actionTypes.COMPLETE_STATE,
  };
};
