import {
  changeCity,
  setSortType,
  loadHotels,
  loadHotel,
  loadNearbyHotels,
  loadReviews,
  requiredAuthorization,
  logout,
  redirectToRoute,
  setUser,
  loadFavorites,
  updateFavorites,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for set sort type returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'Popular',
    };

    expect(setSortType('Popular')).toEqual(expectedAction);
  });

  it('action creator for loading hotels returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTELS,
      payload: [{hotel: 'hotel'}, {hotel: 'hotel'}],
    };

    expect(loadHotels([{hotel: 'hotel'}, {hotel: 'hotel'}])).toEqual(expectedAction);
  });

  it('action creator for loading hotel returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTEL,
      payload: {hotel: 'hotel'},
    };

    expect(loadHotel({hotel: 'hotel'})).toEqual(expectedAction);
  });

  it('action creator for loading nearby hotels returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_HOTELS,
      payload: [{hotel: 'hotel'}, {hotel: 'hotel'}],
    };

    expect(loadNearbyHotels([{hotel: 'hotel'}, {hotel: 'hotel'}])).toEqual(expectedAction);
  });

  it('action creator for loading comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [{comment: 'comment'}, {comment: 'comment'}],
    };

    expect(loadReviews([{comment: 'comment'}, {comment: 'comment'}])).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requiredAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    expect(redirectToRoute('/login')).toEqual(expectedAction);
  });

  it('action creator for setting user returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: {user: 'user'},
    };

    expect(setUser({user: 'user'})).toEqual(expectedAction);
  });

  it('action creator for loading favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{hotel: 'hotel'}, {hotel: 'hotel'}],
    };

    expect(loadFavorites([{hotel: 'hotel'}, {hotel: 'hotel'}])).toEqual(expectedAction);
  });

  it('action creator for updating favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITES,
      payload: {hotel: 'hotel'},
    };

    expect(updateFavorites({hotel: 'hotel'})).toEqual(expectedAction);
  });
});
