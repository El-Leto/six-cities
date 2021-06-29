import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function CityItem({ item, city, changeCity, fillPlaceList }) {

  return (
    <li className="locations__item">
      <a className={city === item
        ? 'locations__item-link tabs__item tabs__item--active'
        : 'locations__item-link tabs__item'}
      href="/#"
      onClick={() => {
        changeCity(item);
        fillPlaceList(item);
      }}
      >
        <span>{item}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  item: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  fillPlaceList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  fillPlaceList: ActionCreator.fillPlaceList,
};

export { CityItem };
export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
