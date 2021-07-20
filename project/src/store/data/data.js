import { createReducer } from '@reduxjs/toolkit';
import {
  loadHotels,
  loadHotel,
  loadNearbyHotels,
  loadReviews,
  loadFavorites,
  updateFavorites
} from '../action';

const initialState = {
  hotels: [],
  hotel: {},
  reviews: [],
  isDataLoaded: false,
  nearbyHotels: [],
  favorites: [],
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
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      state.hotel = action.payload;
    });
});

export { data };
