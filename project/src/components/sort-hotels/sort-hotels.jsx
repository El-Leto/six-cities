import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SortHotelsItem from '../sort-hotels-item/sort-hotels-item';
import { getActiveSortTypes } from '../../store/process/selectors';

function SortHotels({ sortTypes }) {

  const activeSortType = useSelector(getActiveSortTypes);

  const sortingList = useRef();

  const toggleSortingListVisibility = () => sortingList.current.classList.toggle('visually-hidden');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={() => toggleSortingListVisibility()}
        className="places__sorting-type"
        tabIndex="0"
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={sortingList} className="places__options places__options--custom places__options--opened visually-hidden">
        {sortTypes.map((item) => <SortHotelsItem key={item} item={item} activeSortType={activeSortType} toggleSortingListVisibility={toggleSortingListVisibility} />)}
      </ul>
    </form>
  );
}

SortHotels.propTypes = {
  sortTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SortHotels;
