import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EmailRegExp } from "../../utils/const";

import logo from "../../images/logo__COLOR_main.svg";

import "./Login.css";

function Login({ onLogin, serverMessage }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    onLogin(data);
    reset();
  };

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
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="login__fieldset">
          <label className="login__input-label">
            <p className="login__subtitle">E-mail</p>
            <input
              className="login__input login__input_field_email"
              id="login-email-input"
              type="email"
              name="email"
              {...register("email", {
                required: "Необходимо ввести email",
                pattern: {
                  value: EmailRegExp,
                  message: "Введите валидный email",
                },
              })}
            />
            {errors?.email && (
              <span className="login__error-message login-email-input-error">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="login__input-label">
            <p className="login__subtitle">Пароль</p>
            <input
              className="login__input login__input_field_password login-password-input-error"
              id="login-password-input"
              type="password"
              name="password"
              {...register("password", {
                required: "Необходимо ввести пароль",
                minLength: { value: "3", message: "слишком короткий пароль" },
                maxLength: { value: "50", message: "слишком длинный пароль" },
              })}
            />
            {errors?.password && (
              <span className="login__error-message login-password-input-error">
                {errors.password.message}
              </span>
            )}
          </label>
        </fieldset>
        <span
          className={`server-message${
            serverMessage.isError ? " server-message_type_error" : ""
          }`}
        >
          {serverMessage.text}
        </span>
        <button
          type="submit"
          className={
            isValid
              ? "login__submit-btn button-active button-hover"
              : "login__submit-btn button-active button-hover button-disable"
          }
        >
          Войти
        </button>
      </form>
      <p className="login__footnote">
        Ещё не зарегистрированы?&ensp;
        <Link to="/signup" className="login__footnote-link button-hover">
          Регистрация
        </Link>
      </p>
    </div>
  );
}
export default Login;
