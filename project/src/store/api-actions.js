import {
  loadHotels,
  loadNearbyHotels,
  loadHotel,
  loadFavorites,
  redirectToRoute,
  loadReviews,
  setUser,
  requiredAuthorization,
  logout as closeSession,
  updateFavorites
} from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptHotelsToClient, adaptUserToClient, adaptCommentToClient } from '../utils';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptHotelsToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(loadHotels(hotels)))
);

export const fetchNearbyHotelsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptHotelsToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(loadNearbyHotels(hotels)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadHotel(adaptHotelsToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptCommentToClient(review));
      return reviews;
    })
    .then((reviews) => dispatch(loadReviews(reviews)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      dispatch(loadFavorites(
        data.map((hotel) => adaptHotelsToClient(hotel)),
      ));
    })
    //.catch(() => dispatch(redirectToRoute(AppRoute.SING_IN)))
);

export const postReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, review)
    .then(({data}) => {
      const reviews = data.map((item) => adaptCommentToClient(item));
      return reviews;
    })
    .then((reviews) => dispatch(loadReviews(reviews)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setUser(adaptUserToClient(data)));
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUser(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const sendFavoritePlace = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateFavorites(adaptHotelsToClient(data)));
    })
    //.then((hotels) => dispatch(updateFavorites(hotels)))
    //.catch(() => dispatch(redirectToRoute(AppRoute.SING_IN)))
);
