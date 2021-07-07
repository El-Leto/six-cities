export const ActionType = {
  CHANGE_CITY: 'changeCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_HOTELS: 'loadHotels',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setSortType: (sort) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sort,
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels,
  }),
};
