import React from 'react';
import { Link } from 'react-router-dom';

import logoPath from '../../images/logo__COLOR_main.svg';

import './Register.css';

function Register() {


  return (
    <div className="register">
      <Link to="/" className="register__logo-link">
        <img src={logoPath} alt="Логотип" className="register__logo" />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      <form
        className="register__form"
        action="#"
        name="register"
      >
        <fieldset className="register__fieldset">
          <label className="register__input-label">
            <p className="register__subtitle">Имя</p>
            <input
              className="register__input register__input_field_name"
              id="register-name-input"
              type="text"
              name="registerName"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="register__error-message register-name-input-error"></span>
          </label>
          <label className="register__input-label">
            <p className="register__subtitle">E-mail</p>
            <input
              className="register__input register__input_field_email"
              id="register-email-input"
              type="email"
              name="registerEmail"
              minLength='5'
              maxLength='40'
              required
            />
            <span className="register__error-message register-email-input-error"></span>
          </label>
          <label className="register__input-label">
            <p className="register__subtitle">Пароль</p>
            <input
              className="register__input register__input_field_password register__input_type_error"
              id="register-password-input"
              type="password"
              name="registerPassword"
              minLength="5"
              maxLength="50"
              required
            />
            <span className="register__error-message register-password-input-error">Что-то пошло не так...</span>
          </label>
        </fieldset>
        <button type="submit" className="register__submit-btn">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__footnote">Уже зарегистрированы?&ensp;<Link to="/signin" className="register__footnote-link">Войти</Link></p>
    </div>
  );
};

export default Register