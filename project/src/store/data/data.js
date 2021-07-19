import { ActionType } from '../action';

const initialState = {
  hotels: [],
  hotel: {},
  reviews: [],
  isDataLoaded: false,
  nearbyHotels: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_HOTEL:
      return {
        ...state,
        hotel: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY_HOTELS:
      return {
        ...state,
        nearbyHotels: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export { data };
