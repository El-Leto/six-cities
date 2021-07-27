import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/api-actions';
import { CommentLength, DEFAULT_RATING } from '../../const';

function ReviewsForm({ id }) {
  const dispatch = useDispatch();

  const initialState  = {
    rating: DEFAULT_RATING,
    comment: '',
  };
  const [review, setReview] = useState(initialState);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);

  const { rating, comment } = review;

  const handleFormChange = () => {
    setIsSubmitDisabled(!(comment.length > CommentLength.MIN
      && comment.length < CommentLength.MAX
      && rating > DEFAULT_RATING));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    setIsSubmitDisabled(true);
    dispatch(postReview(id, review))
      .then(() => {
        setIsSubmitDisabled(true);
      })
      .catch(() => {
        setIsSubmitDisabled(false);
      });
    setReview(initialState);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      onFocus={handleFormChange}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onInput={handleFormChange} checked={rating === 5} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onInput={handleFormChange} checked={rating === 4} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onInput={handleFormChange} checked={rating === 3} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onInput={handleFormChange} checked={rating === 2} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onInput={handleFormChange} checked={rating === 1} onChange={(evt) => {setReview({...review, rating: Number(evt.target.value)});}} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onInput={handleFormChange} onChange={(evt) => {setReview({...review, comment: evt.target.value});}}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewsForm;
