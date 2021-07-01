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

export { getRatingInPercent };
