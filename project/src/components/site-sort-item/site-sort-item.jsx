import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function SiteSortItem({ item, changeSort, activeSort }) {

  return (
    <li
      key={item}
      className={
        activeSort === item
          ? 'places__option places__option--active'
          : 'places__option'
      }
      onClick={() => {
        changeSort(item);
      }}
      tabIndex="0"
    >
      {item}
    </li>
  );
}

SiteSortItem.propTypes = {
  item: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

export { SiteSortItem };
export default connect(null, mapDispatchToProps)(SiteSortItem);
