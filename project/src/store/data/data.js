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
      const updatedHotel = action.payload;
      const idx = state.hotels.findIndex((hotel) => hotel.id === updatedHotel.id);
      state.hotels = [
        ...state.hotels.slice(0, idx),
        updatedHotel,
        ...state.hotels.slice(idx + 1),
      ];
    });
});

export { data };
