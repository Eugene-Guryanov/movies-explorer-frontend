import { React, useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EmailRegExp } from "../../utils/const";
import "./Profile.css";

function Profile({ onUpdateUser, onSignOut, message, currentUser }) {
  const [emailValue, setEmailValue] = useState(currentUser.email);
  const [nameValue, setNameValue] = useState(currentUser.name );
  const [isMessage, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: nameValue,
      email: emailValue,
    },
  });

  const onSubmit = (data) => {
    onUpdateUser(data);
    setMessage(true);
  };

  return (
    <div className="profile">
      <h1 className="profile__title">{`Привет, ${ currentUser.name }!`}</h1>

      <form
        className="profile__form"
        action="#"
        name="profile"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="profile__fieldset">
          <label className="profile__input-label">
            <p className="profile__subtitle">Имя</p>
            <input
              className="profile__input profile__input_field_name"
              id="profile-name-input"
              type="text"
              name="profileName"
              {...register("name", {
                required: "Необходимо ввести имя",
                minLength: { value: "2", message: "слишком короткое имя" },
                maxLength: { value: "30", message: "слишком длинное имя" },
                onChange: (e) => setNameValue(e.target.value),
              })}
            />
            {errors?.name && (
              <span className="profile__error-message profile-name-input-error">
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="profile__input-label">
            <p className="profile__subtitle">E-mail</p>
            <input
              className="profile__input profile__input_field_email"
              id="profile-email-input"
              type="email"
              {...register("email", {
                required: "Необходимо ввести email",
                pattern: {
                  value: EmailRegExp,
                  message: "Введите валидный email",
                },
                onChange: (e) => setEmailValue(e.target.value),
              })}
            />
            {errors?.email && (
              <span className="profile__error-message profile-email-input-error">
                {errors.email.message}
              </span>
            )}
          </label>
        </fieldset>
        <button
          type="submit"
          className={
            isValid &&
              (currentUser.email !== emailValue || currentUser.name !== nameValue)
              ? "profile__submit-btn button-hover"
              : "profile__submit-btn button-hover button-disable"
          }
        >
          Редактировать
        </button>
      </form>
      <Link
        type="button"
        className="profile__logout-btn button-hover"
        to="/"
        onClick={onSignOut}
      >
        Выйти из аккаунта
      </Link>
      <span
        className={isMessage ? "profile__meassage-active" : "profile__meassage"}
      >
        {message}
      </span>
    </div>
  );
}

export default Profile;
