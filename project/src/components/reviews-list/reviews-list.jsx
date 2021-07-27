import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../app/review.prop';
import ReviewsItem from '../reviews-item/reviews-item';
import { FIRST_ELEMENT, MAX_REVIEWS } from '../../const';

function ReviewsList({ reviews }) {

  return (
    <ul className="reviews__list">
      {reviews
        .slice(FIRST_ELEMENT, MAX_REVIEWS)
        .reverse()
        .map((review) => <ReviewsItem key={review.id} review={review} />)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewsList;
