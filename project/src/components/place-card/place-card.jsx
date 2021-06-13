import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import { getRatingInPercent } from '../../utils';

function PlaceCard({
  hotel: {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
  },
  isFavorites,
  setHoverCard = () => {},
}) {

  const placeRating = getRatingInPercent(rating);

  return (
    <article
      onMouseEnter = {(evt) => {
        const idCard = evt.currentTarget.id;
        setHoverCard(idCard);
      }}
      className={
        isFavorites
          ? 'favorites__card place-card'
          : 'cities__place-card place-card'
      } id={id}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={
          isFavorites
            ? 'favorites__image-wrapper place-card__image-wrapper'
            : 'cities__image-wrapper place-card__image-wrapper'
        }
      >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={isFavorites ? '150' : '260'}
            height={isFavorites ? '110' : '200'}
            alt="Place"
          />
        </Link>
      </div>
      <div
        className={
          isFavorites
            ? 'favorites__card-info place-card__info'
            : 'place-card__info'
        }
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorites
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  hotel: hotelProp,
  isFavorites: PropTypes.bool,
  setHoverCard: PropTypes.func,
};

export default PlaceCard;
