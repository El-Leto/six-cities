import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../../store/process/selectors';
import { changeCity } from '../../store/action';

function CityItem({ item }) {
  const city = useSelector(getCity);

  const dispatch = useDispatch();

  return (
    <li className="locations__item">
      <a className={city === item
        ? 'locations__item-link tabs__item tabs__item--active'
        : 'locations__item-link tabs__item'}
      href="/#"
      onClick={() => {
        dispatch(changeCity(item));
      }}
      >
        <span>{item}</span>
      </a>
    </li>
  );
}

CityItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CityItem;
