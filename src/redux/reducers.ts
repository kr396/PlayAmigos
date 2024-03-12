import {Action, combineReducers} from '@reduxjs/toolkit';

import appSlice from './commonSlice/appSlice';
import commonSlice from './commonSlice/commonSlice';
import userSlice from './commonSlice/userSlice';

const appReducer = combineReducers({
  userState: userSlice,
  appState: appSlice,
  commonState: commonSlice,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
