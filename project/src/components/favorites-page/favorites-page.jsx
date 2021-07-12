import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoritesWrapper from '../favorites-wrapper/favorites-wrapper';
import FavoritesEmptyWrapper from '../favorites-empty-wrapper/favorites-empty-wrapper';
import Header from '../header/header';
import hotelProp from '../app/hotel.prop';

function FavoritesPage(props) {
  const {hotels} = props;

  const favoriteHotels = hotels.filter((hotel) => hotel.isFavorite);

  return (

    <div className="page">
      <Header />
      {
        favoriteHotels.length > 0
          ? <FavoritesWrapper favoriteHotels={favoriteHotels}/>
          : <FavoritesEmptyWrapper />
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
