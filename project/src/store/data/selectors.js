import {NameSpace} from '../root-reducer';

export const getHotels = (state) => state[NameSpace.DATA].hotels;
export const getHotel = (state) => state[NameSpace.DATA].hotel;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getNearbyHotels = (state) => state[NameSpace.DATA].nearbyHotels;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
