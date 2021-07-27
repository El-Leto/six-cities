import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';

function HeaderAuth({ username, avatarUrl, logoutApp }) {

  const dispatch = useDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} alt={'avatar'} style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name">{username}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutApp());
            }}
            to={AppRoute.MAIN}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

HeaderAuth.propTypes = {
  logoutApp: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default HeaderAuth;
