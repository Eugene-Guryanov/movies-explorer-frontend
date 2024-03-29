import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Profile.css';

function Profile() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    setName('');
    setEmail('');
  }, []);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    navigate('/movies');
  }

  return (

    <div className="profile">
      <h1 className="profile__title">Привет, Евгений!</h1>

      <form
        className="profile__form"
        action="#"
        name="profile"
        onSubmit={onSubmit}
      >
        <fieldset className="profile__fieldset">
          <label className="profile__input-label">
            <p className="profile__subtitle">Имя</p>
            <input
              className="profile__input profile__input_field_name"
              id="profile-name-input"
              type="text"
              name="profileName"
              minLength="2"
              maxLength="30"
              required
              value={name ? name : ""}
              onChange={handleChangeName}
            />
            <span className="profile__error-message profile-name-input-error"></span>
          </label>
          <label className="profile__input-label">
            <p className="profile__subtitle">E-mail</p>
            <input
              className="profile__input profile__input_field_email"
              id="profile-email-input"
              type="email"
              name="profileEmail"
              minLength='5'
              maxLength='40'
              required
              value={email ? email : ""}
              onChange={handleChangeEmail}
            />
            <span className="profile__error-message profile-email-input-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="profile__submit-btn button-hover ">Редактировать</button>
      </form>
      <Link type="button" className="profile__logout-btn button-hover" to='/'>Выйти из аккаунта</Link>
    </div>
  );
};

export default Profile;