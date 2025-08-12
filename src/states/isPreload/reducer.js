/* eslint-disable indent */
/**
 * @TODO: Define reducer for the isPreLoad state
 */

import { ActionType } from './action';

function isPreLoadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreload;
  }
}

export default isPreLoadReducer;
