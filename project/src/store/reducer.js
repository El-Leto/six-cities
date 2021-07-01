import hotels from '../mocks/hotels';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const INITIAL_CITY = 'Paris';
const INITIAL_SITE_SORT = 'Popular';

const initialState = {
  city: INITIAL_CITY,
  hotels: hotels.filter(({ city }) => city.name === INITIAL_CITY),
  reviews: reviews,
  activeSort: INITIAL_SITE_SORT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        activeSort: INITIAL_SITE_SORT,
      };
    case ActionType.FILL_PLACE_LIST:
      return {
        ...state,
        hotels: hotels.filter(({ city }) => city.name === action.payload),
        activeSort: INITIAL_SITE_SORT,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
