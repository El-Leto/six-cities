import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page';
import SingInPage from '../sing-in-page/sing-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import reviewProp from './review.prop';

function App(props) {
  const {reviews, isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SingInPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage
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
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ reviews, isDataLoaded }) => ({
  reviews,
  isDataLoaded,
});


export { App };
export default connect(mapStateToProps)(App);
