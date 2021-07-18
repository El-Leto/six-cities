import { ActionCreator } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptHotelsToClient, adaptUserToClient, adaptCommentToClient } from '../utils';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptHotelsToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(ActionCreator.loadHotels(hotels)))
    //.catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchNearbyHotelsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const hotels = data.map((hotel) => adaptHotelsToClient(hotel));
      return hotels;
    })
    .then((hotels) => dispatch(ActionCreator.loadNearbyHotels(hotels)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadHotel(adaptHotelsToClient(data))))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptCommentToClient(review));
      return reviews;
    })
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
);

export const postReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, review)
    //.then(() => dispatch(ActionCreator.loadReviews(true)))
    .then(({data}) => {
      const reviews = data.map((item) => adaptCommentToClient(item));
      return reviews;
    })
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
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
