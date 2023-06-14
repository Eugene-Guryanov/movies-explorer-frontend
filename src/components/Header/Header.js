import "./Header.css";
import logo from "../../images/logo__COLOR_main.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({loggedIn}) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  function onClose() {
    setPopupOpen(false);
  }
  let location = useLocation();

  return (
    <>
      {loggedIn === true ?

        (<header className="header header_type_loggedin">
          <div className="header__container">
            <Link to="/" className="logo-link button-hover">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <Link
              className="header__button header__button_type_loggedIn button-active button-hover"
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className="header__button header__button_type_loggedIn button-active button-hover"
              to="/saved-movies"
            >
              Сохраненне фильмы
            </Link>
          </div>
          <Link
            className="header__button_type_account button-active button-hover"
            to="/profile"
          >
            Аккаунт
          </Link>
          <a className="header__burger button-hover" onClick={setPopupOpen}>
            <span className="header__burger-button button-hover"></span>
          </a>
          <BurgerMenu onClose={onClose} isOpen={isPopupOpen} />
        </header>)
        : (
          <>
            <header className="header">
              <Link to="/" className="logo-link button-hover">
                <img className="header__logo" src={logo} alt="логотип" />
              </Link>
              <div className="header__container">
                <Link
                  className="header__button header__button_type_signup button-hover"
                  to="/signup"
                >
                  Регистрация
                </Link>
                <Link
                  className="header__button header__button_type_signin button-hover"
                  to="/signin"
                >
                  Войти
                </Link>
              </div>
            </header>
          </>
        )}
    </>
  );
}

export default Header;
