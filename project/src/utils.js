import { SortType } from './const';

const PERCENT_IN_ONE_RATING = 20;

const getRatingInPercent = (rating) => `${Math.round(rating) * PERCENT_IN_ONE_RATING}%`;


const sortHotels = (sort, hotels) => {
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

const adaptHotelsToClient = (hotel) => {

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

const adaptUserToClient = (user) => {
  const adaptedUser = {
    ...user,
    avatarUrl: user['avatar_url'],
    isPro: user['is_pro'],
  };

  delete adaptedUser['avatar_url'];
  delete adaptedUser['is_pro'];

  return adaptedUser;
};

const adaptCommentToClient = (review) => {
  const adaptedComment = {
    ...review,
    user: {
      ...review.user,
      isPro: review.user['is_pro'],
      avatarUrl: review.user.avatar_url,
    },
  };

  delete adaptedComment.user['avatar_url'];
  delete adaptedComment.user['is_pro'];

  return adaptedComment;
};

const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export { getRatingInPercent, adaptHotelsToClient, adaptUserToClient, adaptCommentToClient, sortHotels, uppercaseFirstLetter };
