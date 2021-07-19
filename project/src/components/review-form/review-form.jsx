import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postReview } from '../../store/api-actions';
import { CommentLength } from '../../const';

function ReviewsForm({ id, sendReview }) {
  const initialState  = {
    rating: 0,
    comment: '',
  };
  const [review, setReview] = useState(initialState);

  const { rating, comment } = review;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    sendReview(id, review);

    setReview(initialState);
  };

  return (
    <form className="reviews__form form" action="#" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={rating === 5} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={rating === 4} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={rating === 3} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={rating === 2} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={rating === 1} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={(evt) => {setReview({...review, comment: evt.target.value});}}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={comment.length < CommentLength.MIN || comment.length > CommentLength.MAX || rating === 0}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  sendReview: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendReview(id, review) {
    dispatch(postReview(id, review));
  },
});

export { ReviewsForm };
export default connect( null, mapDispatchToProps )(ReviewsForm);
