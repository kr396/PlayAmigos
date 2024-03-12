import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {Sport} from '../../types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {IAxiosResponse} from '../../api/types';

// Define a type for the slice state
interface CommonState {
  sports: Sport[];
}

// Define the initial state using that type
const initialState: CommonState = {
  sports: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSportsAPI.fulfilled, (state, action) => {
      state.sports = action.payload.data;
    });
    builder.addCase(getSportsAPI.rejected, state => {
      state.sports = [];
    });
  },
});

export const {} = commonSlice.actions;

export const getSportsAPI = createAsyncThunk(endpoints.getSports, async () => {
  const response = await api.post<IAxiosResponse<Sport[]>>(endpoints.getSports);
  return response.data;
});

// Other code such as selectors can use the imported `RootState` type
export const getSportsList = (state: RootState) => state.commonState.sports;

export default commonSlice.reducer;
