import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      });
  });

  it('should update authorization status by action payload', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requiredAuthorizationAction  = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should set user by loaded data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    };

    const userData = {
      avatarUrl: '/img/1.png',
      email: 'ted@mail.cpm',
      id: 1,
      isPro: true,
      name: 'Ted',
    };

    const setUserName = {
      type: ActionType.SET_USER,
      payload: userData,
    };

    expect(user(state, setUserName))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: {
          avatarUrl: '/img/1.png',
          email: 'ted@mail.cpm',
          id: 1,
          isPro: true,
          name: 'Ted',
        },
      });
  });

  it('should logout app', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    };

    const requiredAuthorizationAction  = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      });
  });
});
