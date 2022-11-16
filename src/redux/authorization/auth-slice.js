import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshCurrentUser, registry } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

function handleLogin(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registry.fulfilled, handleLogin)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logout.fulfilled, state => (state = { ...initialState }))
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isRejectedAction, (_, action) => {
        console.log('reject', action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
