import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/header';
import ImageList from '../image-list/image-list';
import PropertyList from '../property-list/property-list';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import PlaceList from '../place-list/place-list';
import MapPage from '../map-page/map-page';
import { getRatingInPercent } from '../../utils';
import { AuthorizationStatus, AppRoute } from '../../const';
import { fetchHotel, fetchNearbyHotelsList, fetchReviews, sendFavoritePlace } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { getHotel, getReviews, getNearbyHotels } from '../../store/data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';

function RoomPage() {

  const hotel = useSelector(getHotel);
  const reviews = useSelector(getReviews);
  const nearbyHotels = useSelector(getNearbyHotels);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {
    id,
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
    city,
  } = hotel;

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchNearbyHotelsList(params.id));
    dispatch(fetchReviews(params.id));
    dispatch(fetchHotel(params.id));
  }, [dispatch, params.id]);

  const placeRating = getRatingInPercent(rating);

  const handleButtonClick = () => {
    dispatch(sendFavoritePlace(id, status));
  };

  const status = isFavorite ? '0' : '1';

  return (

    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            {images && <ImageList images={images}/>}
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
                  className={`${isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'}`}
                  type="button"
                  onClick={authorizationStatus === AuthorizationStatus.AUTH
                    ? handleButtonClick
                    : () => dispatch(redirectToRoute(AppRoute.SING_IN))}
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
                {goods && <PropertyList goods={goods} />}
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.AUTH && <ReviewForm id={params.id} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {city && <MapPage city={city} hotels={[hotel, ...nearbyHotels]} activeCard={hotel} />}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList hotels={nearbyHotels} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
