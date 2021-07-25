import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../store/action';
import { getActiveSortTypes } from '../../store/process/selectors';

function SortHotelsItem({ item, toggleSortingListVisibility }) {

  const activeSortType = useSelector(getActiveSortTypes);

  const dispatch = useDispatch();

  return (
    <li
      key={item}
      className={
        activeSortType === item
          ? 'places__option places__option--active'
          : 'places__option'
      }
      onClick={() => {
        dispatch(setSortType(item));
        toggleSortingListVisibility();
      }}
      tabIndex="0"
    >
      {item}
    </li>
  );
}

SortHotelsItem.propTypes = {
  item: PropTypes.string.isRequired,
  toggleSortingListVisibility: PropTypes.func.isRequired,
};

export default SortHotelsItem;
