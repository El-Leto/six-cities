import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import hotels from './mocks/hotels';
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';

const Setting = {
  PLACES_COUNT: 5,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placeCardCount={Setting.PLACES_COUNT}
        hotels={hotels}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
