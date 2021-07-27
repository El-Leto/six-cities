import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute,AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page';
import SingInPage from '../sing-in-page/sing-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import { getLoadedDataStatus } from '../../store/data/selectors';

function App() {
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainPage />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.SING_IN}
        status={AuthorizationStatus.NO_AUTH}
        redirect={AppRoute.MAIN}
        render={() => <SingInPage />}
      >
      </PrivateRoute>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        status={AuthorizationStatus.AUTH}
        redirect={AppRoute.SING_IN}
        render={() => <FavoritesPage />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.ROOM}>
        <RoomPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
