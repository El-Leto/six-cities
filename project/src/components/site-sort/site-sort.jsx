import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import SiteSortItem from '../site-sort-item/site-sort-item';

function SiteSort({ sorts, activeSort }) {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sorts.map((item) => <SiteSortItem key={item} item={item} activeSort={activeSort} />)}
      </ul>
    </form>
  );
}

SiteSort.propTypes = {
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapStateToProps = ({ activeSort }) => ({
  activeSort,
});

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

export { SiteSort };
export default connect(mapStateToProps, mapDispatchToProps)(SiteSort);
