import { process } from './process';
import { ActionType } from '../action';
import { INITIAL_CITY, INITIAL_SITE_SORT } from '../../const';

describe('Reducer: process', () => {
  it('without additional parameters should return initial state', () => {
    expect(process(undefined, {}))
      .toEqual({
        city: INITIAL_CITY,
        activeSortType: INITIAL_SITE_SORT,
      });
  });

  it('should update city by action payload', () => {
    const state = {
      city: INITIAL_CITY,
      activeSortType: INITIAL_SITE_SORT,
    };

    const changeCity = {
      type: ActionType.CHANGE_CITY,
      payload: 'Cologne',
    };

    expect(process(state, changeCity))
      .toEqual({
        city: 'Cologne',
        activeSortType: INITIAL_SITE_SORT,
      });
  });

  it('should update sort type by loaded data', () => {
    const state = {
      city: INITIAL_CITY,
      activeSortType: INITIAL_SITE_SORT,
    };

    const setSortType = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'Price: low to high',
    };

    expect(process(state, setSortType))
      .toEqual({
        city: INITIAL_CITY,
        activeSortType: 'Price: low to high',
      });
  });
});
