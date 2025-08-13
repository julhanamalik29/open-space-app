/**
 * @TODO: Create Redux store
 */

const { configureStore } = require('@reduxjs/toolkit');
const { default: authUserReducer } = require('./authUser/reducer');
const { default: isPreloadReducer } = require('./isPreload/reducer');
const { default: usersReducer } = require('./users/reducer');
const { talksReducer } = require('./talks/reducer');
const { default: talkDetailReducer } = require('./talkDetail/reducer');

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
  },
});

export default store;
