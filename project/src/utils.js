import { SortType } from './const';

const PERCENT_IN_ONE_RATING = 20;

const getRatingInPercent = (rating) =>
  `${rating * PERCENT_IN_ONE_RATING}%`;

export const sortHotels = (sort, hotels) => {
  switch (sort) {
    case SortType.BY_CHEAPER:
      return hotels.slice().sort((a, b) => a.price - b.price);
    case SortType.BY_MORE_EXPENSIVE:
      return hotels.slice().sort((a, b) => b.price - a.price);
    case SortType.BY_RATING:
      return hotels.slice().sort((a, b) => b.rating - a.rating);
    default:
      return hotels;
  }
};

const adaptToClient = (hotel) => {

  const adaptedHotel = {
    ...hotel,
    host: {
      ...hotel.host,
      avatarUrl: hotel.host['avatar_url'],
      isPro: hotel.host['is_pro'],
    },
    isFavorite: hotel['is_favorite'],
    isPremium: hotel['is_premium'],
    maxAdults: hotel['max_adults'],
    previewImage: hotel['preview_image'],
  };

  delete adaptedHotel['preview_image'];
  delete adaptedHotel['is_favorite'];
  delete adaptedHotel['is_premium'];
  delete adaptedHotel['max_adults'];
  delete adaptedHotel.host['is_pro'];
  delete adaptedHotel.host['avatar_url'];

  return adaptedHotel;
};

export { getRatingInPercent, adaptToClient };
