import React from 'react';
import PropTypes from 'prop-types';
import CityItem from '../city-item/city-item';

function CityList({ cities }) {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => <CityItem key={item} item={item} />)}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CityList;
