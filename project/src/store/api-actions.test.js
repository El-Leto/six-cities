import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import {
  fetchHotelsList,
  fetchNearbyHotelsList,
  fetchHotel,
  fetchReviews,
  fetchFavoriteList,
  postReview,
  checkAuth,
  login,
  logout,
  sendFavoritePlace
} from './api-actions';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptHotelsToClient, adaptUserToClient, adaptCommentToClient } from '../utils';

const mockHotel = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    'avatar_url': 'img/1.png',
    id: 3,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  price: 130,
  rating: 3.5,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const mockReview = {
  comment: 'A great place!',
  date: '2021-06-02T11:22:43.569Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/1.jpg',
    id: 1,
    isPro: false,
    name: 'Nick',
  },
};

const fakeUser = {
  'avatar_url': 'img/1.jpg',
  email: 'email@gmail.com',
  id: 1,
  'is_pro': false,
  name: 'Name',
  token: 'jdhdividhifeworu8uhi4r',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [mockHotel]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          payload: [adaptHotelsToClient(mockHotel)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelId = 1;
    const hotelsNearbyLoader = fetchNearbyHotelsList(hotelId);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${hotelId}/nearby`)
      .reply(200, [mockHotel]);

    return hotelsNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_HOTELS,
          payload: [adaptHotelsToClient(mockHotel)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelId = 1;
    const hotelLoader = fetchHotel(hotelId);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${hotelId}`)
      .reply(200, mockHotel);

    return hotelLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTEL,
          payload: adaptHotelsToClient(mockHotel),
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelId = 1;
    const reviewsLoader = fetchReviews(hotelId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${hotelId}`)
      .reply(200, [mockReview]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptCommentToClient(mockReview)],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchFavoriteList();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [mockHotel]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [adaptHotelsToClient(mockHotel)],
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelId = 1;
    const reviewSender = postReview(hotelId, mockReview);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${hotelId}`, mockReview)
      .reply(200, [mockReview]);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptCommentToClient(mockReview)],
        });
      });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: adaptUserToClient([{fake: true}]),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({ login: fakeUser.email, password: '123456' });

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: adaptUserToClient(fakeUser),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelId = 1;
    const status = 0;
    const favoriteSender = sendFavoritePlace(hotelId, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${hotelId}/${status}`)
      .reply(200, mockHotel);

    return favoriteSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITES,
          payload: adaptHotelsToClient(mockHotel),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_HOTEL,
          payload: adaptHotelsToClient(mockHotel),
        });
      });
  });
});
