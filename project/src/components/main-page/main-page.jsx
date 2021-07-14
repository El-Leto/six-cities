import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlaceList from '../place-list/place-list';
import Header from '../header/header';
import MapPage from '../map-page/map-page';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import hotelProp from '../app/hotel.prop';
import CityList from '../city-list/city-list';
import { SortHotels } from '../sort-hotels/sort-hotels';
import { CITIES, SORTS } from '../../const';
import { sortHotels } from '../../utils';

function MainPage({hotels, city, activeSortType}) {

  const [activeCard, setActiveCard] = useState({});

  const onCardHover = (id) => {
    const currentCard = hotels.find((hotel) => hotel.id === Number(id));
    setActiveCard(currentCard);
  };

  const sortedHotels = sortHotels(activeSortType, hotels);

  const sortedByCityHotels = sortedHotels.filter((hotel) => hotel.city.name === city);

  if (!hotels.length) {
    return <MainPageEmpty city={city} />;
  }

  return (

    <div className="page page--gray page--main">
      <Header />
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
              <SortHotels sortTypes={SORTS} activeSortType={activeSortType}/>
              <PlaceList
                isMainPage
                hotels={sortedByCityHotels}
                onMouseEnter={onCardHover}
                onMouseLeave={() => setActiveCard(null)}
              />
            </section>
            <div className="cities__right-section">
              <MapPage city={sortedByCityHotels[0].city} hotels={sortedByCityHotels} activeCard={activeCard}/>
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
  activeSortType: PropTypes.string.isRequired,
};

const mapStateToProps = ({ hotels, city, activeSortType }) => ({
  hotels,
  city,
  activeSortType,
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
