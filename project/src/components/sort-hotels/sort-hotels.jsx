import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SortHotelsItem from '../sort-hotels-item/sort-hotels-item';
import { getActiveSortTypes } from '../../store/process/selectors';

function SortHotels({ sortTypes }) {

  const activeSortType = useSelector(getActiveSortTypes);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortTypes.map((item) => <SortHotelsItem key={item} item={item} activeSortType={activeSortType} />)}
      </ul>
    </form>
  );
}

SortHotels.propTypes = {
  sortTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SortHotels;
