import React from 'react';
import reviewProp from '../app/review.prop';
import { getRatingInPercent } from '../../utils';

function ReviewsItem({ review }) {
  const {
    comment,
    user,
    rating,
    date,
  } = review;

  const reviewDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  const placeRating = getRatingInPercent(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: placeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{reviewDate}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewProp,
};

export default ReviewsItem;
