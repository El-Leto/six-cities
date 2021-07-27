import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        username: '',
      });
  });

  it('should update authorization status by action payload', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      username: '',
    };

    const requiredAuthorizationAction  = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        username: '',
      });
  });

  it('should set user by loaded data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      username: '',
    };

    const setUserName = {
      type: ActionType.SET_USER,
      payload: {email: 'email@gmail.com'},
    };

    expect(user(state, setUserName))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        username: 'email@gmail.com',
      });
  });

  it('should logout app', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      username: '',
    };

    const requiredAuthorizationAction  = {
      type: ActionType.LOGOUT,
      payload: 'Price: low to high',
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        username: '',
      });
  });
});
