import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import hotels from './mocks/hotels';
import reviews from './mocks/reviews';

const Setting = {
  PLACES_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCardCount={Setting.PLACES_COUNT}
      hotels={hotels}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
