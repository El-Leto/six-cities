import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../app/review.prop';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList({ reviews }) {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewsList;
