import React from 'react';
import Logo from '../logo/logo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';
import HeaderAuth from '../header-auth/header-auth';
import HeaderGuest from '../header-guest/header-guest';

function Header({ username, authorizationStatus, logoutApp }) {
  console.log(username);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.AUTH
                  ? <HeaderAuth logoutApp={logoutApp} username={username} />
                  : <HeaderGuest />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logoutApp: PropTypes.func.isRequired,
  username: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
