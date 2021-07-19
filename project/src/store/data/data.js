import { createReducer } from '@reduxjs/toolkit';
import { loadHotels, loadHotel, loadNearbyHotels, loadReviews } from '../action';

const initialState = {
  hotels: [],
  hotel: {},
  reviews: [],
  isDataLoaded: false,
  nearbyHotels: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadHotels, (state, action) => {
      state.isDataLoaded = true;
      state.hotels = action.payload;
    })
    .addCase(loadHotel, (state, action) => {
      state.isDataLoaded = true;
      state.hotel = action.payload;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export { data };
