import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page';
import SingInPage from '../sing-in-page/sing-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import NotFoundPage from '../not-found-page/not-found-page';
import hotelProp from './hotel.prop';
import reviewProp from './review.prop';

function App(props) {
  const {hotels, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            hotels={hotels}
          />
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SingInPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            hotels={hotels}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage
            hotels={hotels}
            reviews={reviews}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
