import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page';
import SingInPage from '../sing-in-page/sing-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props) {
  const {placeCardCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            placeCardCount={placeCardCount}
          />
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SingInPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired,
};

export default App;
