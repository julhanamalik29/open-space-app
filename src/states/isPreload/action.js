/**
 * @TODO: Define all the actions (creator) for the isPreload state
 */

import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

// Function Thunk

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      // Preload Process
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Fallback Process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // End Preload Process
      dispatch(setIsPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
