import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import btnClose from "../../images/burger-close.svg"

function BurgerMenu(props) {

  return (<>
    <div className={`burger-menu ${props.isOpen ? "burger-menu__open" : ""}`}>
      <img className="burger-menu__btn-close button-hover" src={btnClose} onClick={props.onClose} alt="кнопка закрытия" />
      <div className="burger-menu__container">
        <NavLink to='/' className="burger-menu__btn burger-menu__btn-focus button-hover" >Главная</NavLink>
        <NavLink to='/movies' className="burger-menu__btn  burger-menu__btn-focus button-hover">Фильмы</NavLink>
        <NavLink to='/saved-movies' className="burger-menu__btn  burger-menu__btn-focus button-hover" >Сохраненные фильмы</NavLink>
        <NavLink to='/profile' className="burger-menu__btn burger-menu__btn-account button-hover button-active" >Аккаунт</NavLink>
      </div>
    </div>
  </>
  );
}

export default BurgerMenu;
