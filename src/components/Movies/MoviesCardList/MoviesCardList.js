import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MovieCard from "../MoviesCard/MoviesCard";
import { React, useState, useEffect } from "react";
import useViewport from "../../common/useViewport";
import {breakpoint, lengthCard} from '../../../utils/const'

function MoviesCardList({
  filteredMovies,
  handleLikeClick,
  savedMovies,
  handleCardDelete,
  error
}) {
  const location = useLocation();

  const { width } = useViewport();
  const [numberOfCards, setNumberOfCards] = useState(lengthCard.fiveCard);

  useEffect(() => {
    if (width < breakpoint.sm && filteredMovies.length >= lengthCard.fiveCard) {
      setNumberOfCards(lengthCard.fiveCard);
    } else if (width < breakpoint.md && filteredMovies.length >= lengthCard.eightCard) {
      setNumberOfCards(lengthCard.eightCard);
    } else if (width < breakpoint.lg && filteredMovies.length >= lengthCard.twelveСard) {
      setNumberOfCards(lengthCard.twelveСard);
    } else if (width >= breakpoint.lg && filteredMovies.length >= lengthCard.sixteen) {
      setNumberOfCards(lengthCard.sixteen);
    } else {
      setNumberOfCards(filteredMovies.length);
    }
  }, [
    width,
    filteredMovies.length,
    breakpoint.sm,
    breakpoint.md,
    breakpoint.lg,
  ]);

  function handleClickMoreButton() {
    setNumberOfCards((amount) => {
      if (width < breakpoint.sm) {
        return amount + lengthCard.twoCard;
      } else if (width < breakpoint.md) {
        return amount + lengthCard.twoCard;
      } else if (width < breakpoint.lg) {
        return amount + lengthCard.threeCard;
      } else if (width >= breakpoint.lg) {
        return amount + lengthCard.fourCard;
      }
    });
  }
  return (
    <section className="movies-card-list">
      {location.pathname === "/movies" && (
        <>
        {filteredMovies.length === 0  && <span className="movies-card-list__error">Ничего не найдено</span>}
          {error && <span className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
          <ul className="movies-grid">
            {filteredMovies.length > 0 &&
              filteredMovies.slice(0, numberOfCards).map((movie) => (
                <li className="movies-grid__container">
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    handleLikeClick={handleLikeClick}
                    handleCardDelete={handleCardDelete}
                    savedMovies={savedMovies}
                  />
                </li>
              ))}
          </ul>
          {filteredMovies.length > numberOfCards ? (
            <button
              className="movies__btn-more"
              type="button"
              title="Ещё"
              aria-label="Кнопка ещё"
              onClick={handleClickMoreButton}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </>
      )}
      {location.pathname === "/saved-movies" && (
        <>
        {filteredMovies.length === 0  &&<span className="movies-card-list__error">Ничего не найдено</span>}
          {error && <span className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
          <ul className="movies-grid movies-grid_saved-movies">
            {filteredMovies.length > 0 &&
              filteredMovies.slice(0, numberOfCards).map((movie) => (
                <li className="movies-grid__container">
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    handleCardDelete={handleCardDelete}
                    savedMovies={savedMovies}
                  />
                </li>
              ))}
          </ul>
          {filteredMovies.length > numberOfCards ? (
            <button
              className="movies__btn-more"
              type="button"
              title="Ещё"
              aria-label="Кнопка ещё"
              onClick={handleClickMoreButton}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </section>
  );
}
export default MoviesCardList;
