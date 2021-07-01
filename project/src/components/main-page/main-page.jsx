import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlaceList from '../place-list/place-list';
import Logo from '../logo/logo';
import MapPage from '../map-page/map-page';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import hotelProp from '../app/hotel.prop';
import CityList from '../city-list/city-list';
import { SiteSort } from '../site-sort/site-sort';
import { CITIES, SORTS } from '../../const';
import { sortHotels } from '../../utils';

function MainPage(props) {
  const {hotels, city, activeSort} = props;

  const sortedHotels = sortHotels(activeSort, hotels);

  if (!hotels.length) {
    return <MainPageEmpty city={city} />;
  }

  return (

    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES}/>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotels.length} places to stay in {city}</b>
              <SiteSort sorts={SORTS} activeSort={activeSort}/>
              <PlaceList hotels={sortedHotels} />
            </section>
            <div className="cities__right-section">
              <MapPage city={hotels[0].city} hotels={hotels} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapStateToProps = ({ hotels, city, activeSort }) => ({
  hotels,
  city,
  activeSort,
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
