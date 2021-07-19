import { ActionType } from '../action';

const INITIAL_CITY = 'Paris';
const INITIAL_SITE_SORT = 'Popular';

const initialState = {
  city: INITIAL_CITY,
  activeSortType: INITIAL_SITE_SORT,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        activeSortType: INITIAL_SITE_SORT,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };
    default:
      return state;
  }
};

export { process };
