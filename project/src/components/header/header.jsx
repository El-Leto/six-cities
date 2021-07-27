import React from 'react';
import Logo from '../logo/logo';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';
import HeaderAuth from '../header-auth/header-auth';
import HeaderGuest from '../header-guest/header-guest';
import { getAuthorizationStatus, getUsername, getUserAvatar } from '../../store/user/selectors';


function Header() {

  const username = useSelector(getUsername);
  const avatarUrl = useSelector(getUserAvatar);
  const authorizationStatus = useSelector(getAuthorizationStatus);

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
                  ? <HeaderAuth logoutApp={logout} username={username} avatarUrl={avatarUrl} />
                  : <HeaderGuest />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
