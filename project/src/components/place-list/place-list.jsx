import React from 'react';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import PlaceCard from '../place-card/place-card';
import { PlaceType } from '../../const';

function PlaceList({ hotels, onMouseEnter = () => {}, onMouseLeave = () => {}, isMainPage = false }) {

  return (
    <div className={isMainPage
      ? 'cities__places-list places__list tabs__content'
      : 'near-places__list places__list'}
    >
      {hotels.map((place) => (
        <PlaceCard
          key={place.id}
          hotel={place}
          placeType={PlaceType.MAIN}
          onMouseEnter={() => onMouseEnter(place.id)}
          onMouseLeave={() => onMouseLeave(null)}
        />))}
    </div>
  );
}

PlaceList.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isMainPage: PropTypes.bool,
};

export default PlaceList;
