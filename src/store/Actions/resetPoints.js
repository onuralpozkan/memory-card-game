import * as actionTypes from './actionTypes';

export const resetPoints = () => {
  return {
    type:actionTypes.RESET_POINTS,
    payload: 0
  }
}