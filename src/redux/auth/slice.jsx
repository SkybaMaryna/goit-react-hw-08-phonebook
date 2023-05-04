import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  user: {},
  token: null,
  online: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.online = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.online = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.online = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.online = true;
        state.user = payload;
      })
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
