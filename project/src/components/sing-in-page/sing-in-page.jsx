import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/api-actions';
import Header from '../header/header';

function SingInPage() {

  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handlePasswordChange = (evt) =>
    setIsError(evt.target.value.trim().length === 0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitDisabled(true);

    const password = passwordRef.current.value.trim();

    if(isError) {
      setIsSubmitDisabled(false);
      return;
    }

    dispatch(login({
      login: loginRef.current.value,
      password: password,
    }))
      .catch(() => {
        setIsSubmitDisabled(false);
      });
  };

  return (

    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  data-testid="login"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  data-testid="password"
                  style={isError ? {borderColor: 'red'} : {} }
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={isSubmitDisabled}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingInPage;
