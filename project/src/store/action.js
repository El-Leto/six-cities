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

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const setSortType = (sort) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: sort,
});

export const loadHotels = (hotels) => ({
  type: ActionType.LOAD_HOTELS,
  payload: hotels,
});

export const loadHotel = (hotel) => ({
  type: ActionType.LOAD_HOTEL,
  payload: hotel,
});

export const loadNearbyHotels = (hotels) => ({
  type: ActionType.LOAD_NEARBY_HOTELS,
  payload: hotels,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const setUser = (userData) => ({
  type: ActionType.SET_USER,
  payload: userData,
});
