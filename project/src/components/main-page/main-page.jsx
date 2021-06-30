import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlaceList from '../place-list/place-list';
import Logo from '../logo/logo';
import MapPage from '../map-page/map-page';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import hotelProp from '../app/hotel.prop';
import CityList from '../city-list/city-list';
import { CITIES } from '../../const';

function MainPage(props) {
  const {hotels, city} = props;

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlaceList hotels={hotels} />
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
};

const mapStateToProps = ({ hotels, city }) => ({
  hotels,
  city,
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
