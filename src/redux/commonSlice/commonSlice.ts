import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {Skill, Sport} from '../../types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {IAxiosResponse} from '../../api/types';

// Define a type for the slice state
interface CommonState {
  sports: Sport[];
  skills: Skill[];
}

// Define the initial state using that type
const initialState: CommonState = {
  sports: [],
  skills: [],
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
    builder.addCase(getSkillsAPI.fulfilled, (state, action) => {
      state.skills = action.payload.data;
    });
    builder.addCase(getSkillsAPI.rejected, state => {
      state.skills = [];
    });
  },
});

export const {} = commonSlice.actions;

export const getSportsAPI = createAsyncThunk(endpoints.getSports, async () => {
  const response = await api.post<IAxiosResponse<Sport[]>>(endpoints.getSports);
  return response.data;
});

export const getSkillsAPI = createAsyncThunk(endpoints.getSkills, async () => {
  const response = await api.post<IAxiosResponse<Skill[]>>(endpoints.getSkills);
  return response.data;
});

// Other code such as selectors can use the imported `RootState` type
export const getSportsList = (state: RootState) => state.commonState.sports;
export const getSkillsList = (state: RootState) => state.commonState.skills;

export default commonSlice.reducer;
