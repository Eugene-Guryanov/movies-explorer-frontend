import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/logo__COLOR_main.svg';

import './Login.css';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    navigate('/movies');
  }

  return (
    <div className="login">
      <Link to="/" className="login__logo-link">
        <img src={logo} alt="Логотип" className="login__logo" />
      </Link>
      <h1 className="login__title">Рады видеть!</h1>

      <form
        className="login__form"
        action="#"
        name="login"
        onSubmit={onSubmit}
      >
        <fieldset className="login__fieldset">
          <label className="login__input-label">
            <p className="login__subtitle">E-mail</p>
            <input
              className="login__input login__input_field_email"
              id="login-email-input"
              type="email"
              name="loginEmail"
              minLength='5'
              maxLength='40'
              required
              value={email ? email : ""}
              onChange={handleChangeEmail}
            />
            <span className="login__error-message login-email-input-error"></span>
          </label>
          <label className="login__input-label">
            <p className="login__subtitle">Пароль</p>
            <input
              className="login__input login__input_field_password login-password-input-error"
              id="login-password-input"
              type="password"
              name="loginPassword"
              minLength="5"
              maxLength="50"
              required
              value={password ? password : ""}
              onChange={handleChangePassword}
            />
            <span className="login__error-message login-password-input-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="login__submit-btn button-active button-hover">
          Войти
        </button>
      </form>
      <p className="login__footnote">Ещё не зарегистрированы?&ensp;<Link to="/signup" className="login__footnote-link button-hover" >Регистрация</Link></p>
    </div>
  );
};
export default Login