import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import hotelProp from '../app/hotel.prop';

function FavoritesItem({ favoriteHotels, favoritesCity }) {
  const hotels = favoriteHotels.filter(
    (hotel) => hotel.city.name === favoritesCity,
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((place) => <PlaceCard key={place.id} hotel={place} isFavorites />)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteHotels: PropTypes.arrayOf(hotelProp),
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesItem;