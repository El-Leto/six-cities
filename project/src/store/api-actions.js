import {
  loadFavorites,
  loadHotel,
  loadHotels,
  loadNearbyHotels,
  loadReviews,
  logout as closeSession,
  redirectToRoute,
  requiredAuthorization,
  setUser,
  updateFavorites
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptCommentToClient, adaptHotelsToClient, adaptUserToClient} from '../utils';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(adaptHotelsToClient))
    .then((hotels) => dispatch(loadHotels(hotels)))
);

export const fetchNearbyHotelsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => data.map(adaptHotelsToClient))
    .then((hotels) => dispatch(loadNearbyHotels(hotels)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadHotel(adaptHotelsToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => data.map(adaptCommentToClient))
    .then((reviews) => dispatch(loadReviews(reviews)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      dispatch(loadFavorites(
        data.map(adaptHotelsToClient),
      ));
    })
);

export const postReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, review)
    .then(({data}) => data.map(adaptCommentToClient))
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
      dispatch(setUser(adaptUserToClient(data)));
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
      dispatch(loadHotel(adaptHotelsToClient(data)));
    })
);
