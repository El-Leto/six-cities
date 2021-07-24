import { data } from './data';
import { ActionType } from '../action';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        hotels: [],
        hotel: {},
        reviews: [],
        isDataLoaded: false,
        nearbyHotels: [],
      });
  });

  it('should update hotels by loaded data', () => {
    const state = {
      hotels: [],
      hotel: {},
      reviews: [],
      isDataLoaded: false,
      nearbyHotels: [],
    };

    const loadHotels = {
      type: ActionType.LOAD_HOTELS,
      payload: [{hotel: 'hotel'}, {hotel: 'hotel'}],
    };

    expect(data(state, loadHotels))
      .toEqual({
        hotels: [{hotel: 'hotel'}, {hotel: 'hotel'}],
        hotel: {},
        reviews: [],
        isDataLoaded: true,
        nearbyHotels: [],
      });
  });

  it('should update hotel by loaded data', () => {
    const state = {
      hotels: [],
      hotel: {},
      reviews: [],
      isDataLoaded: false,
      nearbyHotels: [],
    };

    const loadHotel = {
      type: ActionType.LOAD_HOTEL,
      payload: {hotel: 'hotel'},
    };

    expect(data(state, loadHotel))
      .toEqual({
        hotels: [],
        hotel: {hotel: 'hotel'},
        reviews: [],
        isDataLoaded: true,
        nearbyHotels: [],
      });
  });

  it('should update nearby hotels by loaded data', () => {
    const state = {
      hotels: [],
      hotel: {},
      reviews: [],
      isDataLoaded: false,
      nearbyHotels: [],
    };

    const loadNearbyHotels = {
      type: ActionType.LOAD_NEARBY_HOTELS,
      payload: [{hotel: 'hotel'}, {hotel: 'hotel'}],
    };

    expect(data(state, loadNearbyHotels))
      .toEqual({
        hotels: [],
        hotel: {},
        reviews: [],
        isDataLoaded: false,
        nearbyHotels: [{hotel: 'hotel'}, {hotel: 'hotel'}],
      });
  });

  it('should update reviews by loaded data', () => {
    const state = {
      hotels: [],
      hotel: {},
      reviews: [],
      isDataLoaded: false,
      nearbyHotels: [],
    };

    const loadReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{comment: 'comment'}, {comment: 'comment'}],
    };

    expect(data(state, loadReviews))
      .toEqual({
        hotels: [],
        hotel: {},
        reviews: [{comment: 'comment'}, {comment: 'comment'}],
        isDataLoaded: false,
        nearbyHotels: [],
      });
  });
});
