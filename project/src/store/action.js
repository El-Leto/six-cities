import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'changeCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_HOTELS: 'loadHotels',
  LOAD_HOTEL: 'loadHotel',
  LOAD_NEARBY_HOTELS: 'loadNearbyHotels',
  LOAD_REVIEWS: 'loadReviews',
  LOAD_FAVORITES: 'loadFavorites',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'setUser',
  UPDATE_FAVORITES: 'updateFavorites',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (payload) => ({
  payload,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (payload) => ({
  payload,
}));

export const loadHotels = createAction(ActionType.LOAD_HOTELS, (payload) => ({
  payload,
}));

export const loadHotel = createAction(ActionType.LOAD_HOTEL, (payload) => ({
  payload,
}));

export const loadNearbyHotels = createAction(ActionType.LOAD_NEARBY_HOTELS, (payload) => ({
  payload,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const requiredAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (payload) => ({
  payload,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({
  payload,
}));

export const setUser = createAction(ActionType.SET_USER, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({
  payload,
}));

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (payload) => ({
  payload,
}));
