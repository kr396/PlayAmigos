import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

interface IAppState {
  loading: boolean;
}

const initialState: IAppState = {
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = appSlice.actions;

export const getAppLoading = (state: RootState) => state.appState.loading;

export default appSlice.reducer;
