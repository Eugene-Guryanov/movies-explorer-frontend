import { React } from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo__COLOR_main.svg';
import { useForm } from "react-hook-form";
import { NameRegExp } from '../../utils/const';
import { EmailRegExp } from '../../utils/const';
import './Register.css';

function Register({ onRegister, serverMessage }) {
  const { register, handleSubmit, formState: { errors, isValid }, reset, } = useForm({ mode: 'onChange' })
  const onSubmit = (data) => {
    onRegister(data);
    reset()
  }

  return (
    <div className="register">
      <Link to="/" className="register__logo-link">
        <img src={logoPath} alt="Логотип" className="register__logo" />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      <form
        className="register__form"
        id='form'
        name="register"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="register__fieldset">
          <label className="register__input-label">
            <p className="register__subtitle">Имя</p>
            <input
              className="register__input register__input_field_name"
              id="register-name-input"
              type="text"
              name="name"
              {...(register('name', {
                required: 'Необходимо ввести имя',
                pattern: {
                  value: { NameRegExp },
                  message: 'Введите валидное имя'
                }, minLength: { value: '2', message: 'слишком короткое имя' },
                maxLength: { value: '30', message: 'слишком длинное имя' }
              }))}
            />
            {errors?.name && (<span className="register__error-message register-name-input-error">{errors.name.message}</span>)}
          </label>
          <label className="register__input-label">
            <p className="register__subtitle">E-mail</p>
            <input
              className="register__input register__input_field_email"
              id="register-email-input"
              type="text"
              name="email"
              {...(register('email', {
                required: 'Необходимо ввести email',
                pattern: {
                  value: EmailRegExp,
                  message: 'Введите валидный email'
                }
              }))}
            />
            {errors?.email && (<span className="register__error-message register-email-input-error">{errors.email.message}</span>)}
          </label>
          <label className="register__input-label">
            <p className="register__subtitle">Пароль</p>
            <input
              className={errors.password ? "register__input register__input_field_password register__input_type_error" : 'register__input register__input_field_password'}
              id="register-password-input"
              type="password"
              name="password"

              {...(register('password', {
                required: 'Необходимо ввести пароль', minLength: { value: "5", message: 'слишком короткий пароль' },
                maxLength: { value: "50", message: 'слишком длинный пароль' }
              }))}
            />
            {errors?.password && (<span className="register__error-message register-password-input-error">{errors.password.message}</span>)}
          </label>
        </fieldset>
        <span
          className={`server-message${serverMessage.isError
            ? " server-message_type_error"
            : ""
            }`}

        >
          {serverMessage.text}
        </span>
        <button type="submit" className={isValid ? 'register__submit-btn button-hover' : 'register__submit-btn button-hover button-disable'}>
          Зарегистрироваться
        </button>
      </form>
      <p className="register__footnote">Уже зарегистрированы?&ensp;<Link to="/signin" className="register__footnote-link">Войти</Link></p>
    </div>
  );
};

export default Register