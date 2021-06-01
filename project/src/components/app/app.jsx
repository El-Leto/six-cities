import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {placeCardCount} = props;

  return (
    <MainPage
      placeCardCount={placeCardCount}
    />
  );
}

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired,
};

export default App;
