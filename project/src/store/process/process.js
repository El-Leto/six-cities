import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setSortType } from '../action';

const INITIAL_CITY = 'Paris';
const INITIAL_SITE_SORT = 'Popular';

const initialState = {
  city: INITIAL_CITY,
  activeSortType: INITIAL_SITE_SORT,
};

const process = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.activeSortType = INITIAL_SITE_SORT;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
    });
});

export { process };
