import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/header';
import hotelProp from '../app/hotel.prop';
import reviewProp from '../app/review.prop';
import ImageList from '../image-list/image-list';
import PropertyList from '../property-list/property-list';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import PlaceList from '../place-list/place-list';
import MapPage from '../map-page/map-page';
import { getRatingInPercent } from '../../utils';

function RoomPage({ hotels, reviews }) {

  const location = useLocation();

  const hotel = hotels.find((item) => `/offer/${item.id}` === location.pathname);

  const otherHotels = hotels.filter((item) => item.id !== hotel.id);

  const nearHotels = otherHotels.filter((item) => item.city.name === hotel.city.name);

  const [activeCard, setActiveCard] = useState(hotel);

  const onCardHover = (cardId) => {
    const currentCard = hotels.find((offer) => offer.id === Number(cardId));
    setActiveCard(currentCard);
  };

  const {
    price,
    images,
    isPremium,
    isFavorite,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    goods,
  } = hotel;

  const placeRating = getRatingInPercent(rating);


  return (

    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImageList images={images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={
                    isFavorite
                      ? 'property__bookmark-button property__bookmark-button--active button'
                      : 'property__bookmark-button button'
                  } type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: placeRating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyList goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount"></span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <MapPage city={hotels[0].city} hotels={nearHotels} activeCard={activeCard} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList
              hotels={nearHotels}
              onMouseEnter={onCardHover}
              onMouseLeave={() => setActiveCard(hotel)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

const mapStateToProps = ({ hotels, reviews }) => ({
  hotels,
  reviews,
});

export { RoomPage };
export default connect(mapStateToProps)(RoomPage);
