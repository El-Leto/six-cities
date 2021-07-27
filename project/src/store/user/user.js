import { createReducer } from '@reduxjs/toolkit';
import { requiredAuthorization, setUser, logout } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
  isReviewSending: false,
  isReviewSuccess: false,
  isReviewError: false,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = {
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
      };
    })
    .addCase(logout, (state, action) => {
      state.user = {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      };
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export { user };
