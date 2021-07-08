import React from 'react';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import FavoriteItem from '../favorite-item/favorite-item';

function FavoriteList({ favoriteHotels }) {

  const cities = [...new Set(favoriteHotels.map((hotel) => hotel.city.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoriteItem key={city} favoriteHotels={favoriteHotels} favoritesCity={city} />)}
    </ul>
  );
}

FavoriteList.propTypes = {
  favoriteHotels: PropTypes.arrayOf(hotelProp).isRequired,
};

export default FavoriteList;
