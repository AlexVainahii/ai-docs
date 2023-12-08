import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  loginWithGoogle,
  logout,
  register,
  userRefresh,
} from './opertionsActions';
import {
  onFulfilledLogOut,
  onFulfilledRefresh,
  onFulfilledRegisterLogin,
  onPending,
  onRejected,
} from './helpFunctionAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    showAuthForm: false,
  },
  reducers: {
    setShowAuthForm: (state, action) => {
      state.showAuthForm = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, onFulfilledRegisterLogin)
      .addCase(login.fulfilled, onFulfilledRegisterLogin)
      .addCase(loginWithGoogle.fulfilled, onFulfilledRegisterLogin)
      .addCase(logout.fulfilled, onFulfilledLogOut)
      .addCase(userRefresh.fulfilled, onFulfilledRefresh)
      .addCase(userRefresh.pending, onPending)
      .addCase(userRefresh.rejected, onRejected);
  },
});

export const { setShowAuthForm } = authSlice.actions;
