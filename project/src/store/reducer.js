import hotels from '../mocks/hotels';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const INITIAL_CITY = 'Paris';

const initialState = {
  city: INITIAL_CITY,
  hotels: hotels.filter(({ city }) => city.name === INITIAL_CITY),
  reviews: reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_PLACE_LIST:
      return {
        ...state,
        hotels: hotels.filter(({ city }) => city.name === action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
