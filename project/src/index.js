import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import { requiredAuthorization } from './store/action';
import { checkAuth, fetchHotelsList } from './store/api-actions';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middlewares/redirect';
import browserHistory from './browser-history';
import {Router as BrowserRouter} from 'react-router-dom';

const api = createAPI(
  () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchHotelsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
