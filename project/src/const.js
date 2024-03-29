export const AppRoute = {
  MAIN: '/',
  SING_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  NOT_FOUND: '/404',
};

export const PlaceType = {
  MAIN: 'MAIN',
  FAVORITES: 'FAVORITES',
};

export const placeCardType = {
  MAIN: {
    type: 'cities',
    className: 'cities__place-card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
  FAVORITES: {
    type: 'favorites',
    className: 'favorites__card place-card',
    classNameInfo: 'favorites__card-info place-card__info',
    width: '150',
    height: '110',
  },
  NEAR_PLACES: {
    type: 'near-places',
    className: 'near-places__card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const SortType = {
  BY_CHEAPER: 'Price: low to high',
  BY_MORE_EXPENSIVE: 'Price: high to low',
  BY_RATING: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  HOTELS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorite',
};

export const CommentLength = {
  MIN: 50,
  MAX: 300,
};

export const Ratings = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};

export const ToastMessages = {
  DEFAULT: 'Something went wrong',
  OFFLINE: 'Connection is lost',
  REVIEW_ERROR: 'The review is not sent. Please try again',
};

export const INITIAL_CITY = 'Paris';
export const INITIAL_SITE_SORT = 'Popular';
export const FIRST_ELEMENT = 0;
export const MAX_IMAGES = 6;
export const MAX_REVIEWS = 10;
export const DEFAULT_RATING = 0;
export const DEFAULT_TIMEOUT = 2500;
