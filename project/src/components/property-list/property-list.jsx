import React from 'react';
import PropTypes from 'prop-types';
import PropertyItem from '../property-item/property-item';

function PropertyList({ goods }) {

  return (
    <ul className="property__inside-list">
      {goods.map((good) => <PropertyItem key={good} good={good} />)}
    </ul>
  );
}

PropertyList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyList;
