import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import btnClose from "../../images/burger-close.svg"

function BurgerMenu(props) {

  return (<>
    <div className={`BurgerMenu ${props.isOpen ? "BurgerMenu__open" : ""}`}>
      <img className="BurgerMenu__btn-close button-hover" src={btnClose} onClick={props.onClose} />
      <div className="BurgerMenu__container">
        <NavLink to='/' className="BurgerMenu__btn BurgerMenu__btn-focus button-hover" >Главная</NavLink>
        <NavLink to='/movies' className="BurgerMenu__btn  BurgerMenu__btn-focus button-hover">Фильмы</NavLink>
        <NavLink to='/saved-movies' className="BurgerMenu__btn  BurgerMenu__btn-focus button-hover" >Сохраненные фильмы</NavLink>
        <NavLink to='/profile' className="BurgerMenu__btn BurgerMenu__btn-account button-hover button-active" >Аккаунт</NavLink>
      </div>
    </div>
  </>
  );
}

export default BurgerMenu;
