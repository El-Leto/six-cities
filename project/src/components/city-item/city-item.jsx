import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity as  replaceCity} from '../../store/action';
import { getCity } from '../../store/process/selectors';

function CityItem({ item, city, changeCity }) {

  return (
    <li className="locations__item">
      <a className={city === item
        ? 'locations__item-link tabs__item tabs__item--active'
        : 'locations__item-link tabs__item'}
      href="/#"
      onClick={() => {
        changeCity(item);
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
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = {
  changeCity: replaceCity,
};

export { CityItem };
export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
