import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {IAxiosResponse} from '../../api/types';

export interface User {
  bio?: string;
  email: string;
  firstName: string;
  gender?: string;
  isEmailVerified: number;
  isSportAdded: number;
  lastName: string;
  phone: string;
  profilePic: string;
  sportData: any[];
  userId: number;
}

// Define a type for the slice state
interface UserState {
  user: User | null;
  token?: string;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserDetails: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addSportsAPI.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const addSportsAPI = createAsyncThunk(
  endpoints.addSport,
  async (data: {sport_id: number; skill_id: number}[]) => {
    const response = await api.post<IAxiosResponse<User>>(endpoints.addSport, {
      sport: data,
    });
    return response.data.data;
  },
);

export const {setUserDetails, setAuthToken} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.userState.user;
export const getAuthToken = (state: RootState) => state.userState.token;

export default userSlice.reducer;
