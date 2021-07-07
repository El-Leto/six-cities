import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { adaptToClient } from '../utils';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(ActionCreator.loadHotels(hotels)))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(({data}) => localStorage.setItem('token', data.token))
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );

// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.logout()))
// );
