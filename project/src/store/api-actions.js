import { ActionCreator } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptHotelsToClient, adaptUserToClient } from '../utils';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptHotelsToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(ActionCreator.loadHotels(hotels)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);
