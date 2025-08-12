/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreLoad) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreLoad,
    },
  };
}

// Function Thunk

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // Preload Process
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // Fallback Process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // End Preload Process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
