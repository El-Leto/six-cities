import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import hotelProp from '../app/hotel.prop';
import { getRatingInPercent, uppercaseFirstLetter } from '../../utils';
import { placeCardType } from '../../const';
import { sendFavoritePlace } from '../../store/api-actions';

function PlaceCard({ hotel, placeType, onMouseEnter, onMouseLeave }) {

  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    isFavorite,
  } = hotel;

  const dispatch = useDispatch();

  const placeRating = getRatingInPercent(rating);


  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={placeCardType[placeType].className} id={id}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${placeCardType[placeType].type}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={placeCardType[placeType].width}
            height={placeCardType[placeType].width}
            alt="Place"
          />
        </Link>
      </div>
      <div
        className={placeCardType[placeType].classNameInfo}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            onClick={() => {
              const newFavoriteState = isFavorite ? '0' : '1';
              dispatch(sendFavoritePlace(id, newFavoriteState));
            }}
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
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{uppercaseFirstLetter(type)}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  hotel: hotelProp,
  placeType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default PlaceCard;
