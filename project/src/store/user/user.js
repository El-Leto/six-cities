import { createReducer } from '@reduxjs/toolkit';
import { requiredAuthorization, setUser, logout } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  username: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.username = action.payload.email;
    })
    .addCase(logout, (state, action) => {
      state.username = '';
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export { user };
