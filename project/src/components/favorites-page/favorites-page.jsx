import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoritesWrapper from '../favorites-wrapper/favorites-wrapper';
import FavoritesEmptyWrapper from '../favorites-empty-wrapper/favorites-empty-wrapper';
import Header from '../header/header';
import { getFavorites } from '../../store/data/selectors';
import { fetchFavoriteList } from '../../store/api-actions';

function FavoritesPage() {
  const favoriteHotels = useSelector(getFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, [dispatch]);

  //const favoriteHotels = hotels.filter((hotel) => hotel.isFavorite);

  return (

    <div className="page">
      <Header />
      {
        favoriteHotels.length ? <FavoritesWrapper favoriteHotels={favoriteHotels}/>
          : <FavoritesEmptyWrapper />
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
