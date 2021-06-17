import React, {useState} from 'react';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import PlaceCard from '../place-card/place-card';
import { PlaceType } from '../../const';

function PlaceList({ hotels }) {
  const [, setHoverCard] = useState({id: null});

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((place) => <PlaceCard key={place.id} hotel={place} placeType={PlaceType.MAIN} setHoverCard={setHoverCard} />)}
    </div>
  );
}

PlaceList.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
};

export default PlaceList;
