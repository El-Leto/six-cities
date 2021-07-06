import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function SortHotelsItem({ item, setSortType, activeSortType }) {

  return (
    <li
      key={item}
      className={
        activeSortType === item
          ? 'places__option places__option--active'
          : 'places__option'
      }
      onClick={() => {
        setSortType(item);
      }}
      tabIndex="0"
    >
      {item}
    </li>
  );
}

SortHotelsItem.propTypes = {
  item: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  setSortType: ActionCreator.setSortType,
};

export { SortHotelsItem };
export default connect(null, mapDispatchToProps)(SortHotelsItem);
