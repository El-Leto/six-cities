import React, {useState} from 'react';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import PlaceCard from '../place-card/place-card';

function PlaceList({ hotels }) {
  const [, setHoverCard] = useState({id: null});

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((place) => <PlaceCard key={place.id} hotel={place} setHoverCard={setHoverCard} />)}
    </div>
  );
}

PlaceList.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
};

export default PlaceList;
