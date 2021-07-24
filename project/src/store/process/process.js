import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setSortType } from '../action';
import { INITIAL_CITY, INITIAL_SITE_SORT } from '../../const';

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
