export const ActionType = {
  CHANGE_CITY: 'changeCity',
  FILL_PLACE_LIST: 'fillPlaceList',
  SET_SORT_TYPE: 'setSortType',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillPlaceList: (city) => ({
    type: ActionType.FILL_PLACE_LIST,
    payload: city,
  }),
  setSortType: (sort) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sort,
  }),
};
