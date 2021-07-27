import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/api-actions';
import { CommentLength, DEFAULT_RATING, ToastMessages } from '../../const';
import RatingList from '../rating-list/rating-list';
import Toast from '../toast/toast';

function ReviewsForm({ id }) {
  const dispatch = useDispatch();

  const initialState  = {
    rating: DEFAULT_RATING,
    comment: '',
  };
  const [review, setReview] = useState(initialState);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [isSendingComment, setIsSendingComment] = React.useState(false);
  const [isSendingError, setIsSendingError] = React.useState(false);

  const { rating, comment } = review;

  const handleFormChange = () => {
    setIsSubmitDisabled(!(comment.length > CommentLength.MIN
      && comment.length < CommentLength.MAX
      && rating > DEFAULT_RATING
      && !isSendingComment));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isSubmitDisabled || isSendingComment) {
      return;
    }

    setIsSendingComment(true);
    setIsSubmitDisabled(true);
    dispatch(postReview(id, review))
      .then(() => {
        setIsSubmitDisabled(true);
        setIsSendingComment(false);
        setReview(initialState);
      })
      .catch(() => {
        setIsSendingComment(false);
        setIsSubmitDisabled(false);
        setIsSendingError(true);
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      onFocus={handleFormChange}
    >
      {isSendingError && <Toast message={ToastMessages.OFFLINE} />}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList review={review} rating={rating} setReview={setReview} />
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
