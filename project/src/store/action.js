import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'changeCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_HOTELS: 'loadHotels',
  LOAD_HOTEL: 'loadHotel',
  LOAD_NEARBY_HOTELS: 'loadNearbyHotels',
  LOAD_REVIEWS: 'loadReviews',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'setUser',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sort) => ({
  payload: sort,
}));

export const loadHotels = createAction(ActionType.LOAD_HOTELS, (hotels) => ({
  payload: hotels,
}));

export const loadHotel = createAction(ActionType.LOAD_HOTEL, (hotel) => ({
  payload: hotel,
}));

export const loadNearbyHotels = createAction(ActionType.LOAD_NEARBY_HOTELS, (hotels) => ({
  payload: hotels,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const requiredAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUser = createAction(ActionType.SET_USER, (userData) => ({
  payload: userData,
}));
