import { ActionType } from './action';
import { AuthorizationStatus } from '../const';

const INITIAL_CITY = 'Paris';
const INITIAL_SITE_SORT = 'Popular';

const initialState = {
  city: INITIAL_CITY,
  hotels: [],
  reviews: [],
  activeSortType: INITIAL_SITE_SORT,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  username: '',
};

const reducer = (state = initialState, action) => {
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
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        username: action.payload.email,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        username: '',
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
