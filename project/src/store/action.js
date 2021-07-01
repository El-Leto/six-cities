export const ActionType = {
  CHANGE_CITY: 'changeCity',
  FILL_PLACE_LIST: 'fillPlaceList',
  CHANGE_SORT: 'changeSort',
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
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};
