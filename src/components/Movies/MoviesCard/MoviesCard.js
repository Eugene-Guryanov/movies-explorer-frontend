import deleted from "../../../images/delete.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie, handleLikeClick, handleCardDelete, savedMovies }) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [save, setSave] = useState(false);
  function getTimeFromMins(mins, movie) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }
  useEffect(() => {
  	savedMovies.map((card) => {
  		if (card.movieId === movie.id) {
  			setSave(true);
  		}
  	});
  }, []);

  function handleClick() {
    if (!save) {
      setSave(true);
      handleLikeClick(movie);
    } else {
      setSave(false);
      handleCardDelete(savedMovies.find((card) => card.movieId === movie.id));
    }
  }

  function handleClickDeleteCard() {
    setSave(false);
    handleCardDelete(movie);
  }

  const cardSaveButtonClassName = `${
    currentUser._id === movie.owner && save
      ? "movie__like-btn card__like-btn_active"
      : "movie__like-btn"
  }`;

  return (
    <figure className="movie-template">
      <a
        href={movie.trailerLink}
        className="movie__trailer-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__image"
          src={
            location.pathname === "/saved-movies"
              ? movie.image
              : `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt="Обложка фильма"
        />
      </a>
      <figcaption className="movie__caption">
        <div className="movie__container">
          <h3 className="movie__title">{movie.nameRU}</h3>
          {location.pathname === "/movies" && (
            <button
              type="button"
              aria-label='Отметка "Сохранить"'
              className={cardSaveButtonClassName}
              onClick={handleClick}
            ></button>
          )}
          {location.pathname === "/saved-movies" && (
            <img
              className="movie__btn-image"
              src={deleted}
              alt="Удалить"
              onClick={handleClickDeleteCard}
            />
          )}
        </div>
        <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  );
}
export default MoviesCard;
