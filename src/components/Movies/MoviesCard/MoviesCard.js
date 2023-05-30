import deleted from '../../../images/delete.svg';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import "./MoviesCard.css"


function MoviesCard({ movie }) {
  const location = useLocation();

  function getTimeFromMins(mins, movie) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  const [buttonClassName, setButtonClassName] = useState("movie__like-btn");

  function handleLikeClick() {
    if (buttonClassName.includes("movie__like-btn_active")) {
      setButtonClassName("movie__like-btn");
    } else {
      setButtonClassName("movie__like-btn card__like-btn_active");
    }
  };

  return (
    <figure className='movie-template'>
      <img className='movie__image' src={movie.image.url} alt='Обложка фильма' />
      <figcaption className='movie__caption'>
        <div className='movie__container'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          {location.pathname === '/movies' &&
            <button type="button" aria-label='Отметка "Сохранить"' className={buttonClassName} onClick={handleLikeClick}></button>
          }
          {location.pathname === '/saved-movies' &&
            <img className='movie__btn-image' src={deleted} alt='Удалить' />
          }
        </div>
        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  )
}
export default MoviesCard;