import React from 'react';
import FavoriteList from '../favorite-list/favorite-list';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';

function FavoritesWrapper({ favoriteHotels }) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList favoriteHotels={favoriteHotels} />
        </section>
      </div>
    </main>
  );
}

FavoritesWrapper.propTypes = {
  favoriteHotels: PropTypes.arrayOf(hotelProp).isRequired,
};

export default FavoritesWrapper;
