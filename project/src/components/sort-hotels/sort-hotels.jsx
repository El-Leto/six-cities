import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortType as changeSortType } from '../../store/action';
import SortHotelsItem from '../sort-hotels-item/sort-hotels-item';

function SortHotels({ sortTypes, activeSortType }) {

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
  activeSortType: PropTypes.string.isRequired,
};

const mapStateToProps = ({ activeSortType }) => ({
  activeSortType,
});

const mapDispatchToProps = {
  setSortType: changeSortType,
};

export { SortHotels };
export default connect(mapStateToProps, mapDispatchToProps)(SortHotels);
