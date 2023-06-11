import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MovieCard from "../MoviesCard/MoviesCard";
import { React, useState, useEffect } from "react";
import useViewport from "../../common/useViewport";

function MoviesCardList({
  filteredMovies,
  handleLikeClick,
  savedMovies,
  handleCardDelete,
  error
}) {
  const location = useLocation();

  const { width } = useViewport();
  const [numberOfCards, setNumberOfCards] = useState(5);

  const breakpoint = {
    sm: 650,
    md: 1000,
    lg: 1280,
  };

  useEffect(() => {
    if (width < breakpoint.sm && filteredMovies.length >= 5) {
      setNumberOfCards(5);
    } else if (width < breakpoint.md && filteredMovies.length >= 8) {
      setNumberOfCards(8);
    } else if (width < breakpoint.lg && filteredMovies.length >= 12) {
      setNumberOfCards(12);
    } else if (width >= breakpoint.lg && filteredMovies.length >= 16) {
      setNumberOfCards(16);
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
        return amount + 2;
      } else if (width < breakpoint.md) {
        return amount + 2;
      } else if (width < breakpoint.lg) {
        return amount + 3;
      } else if (width >= breakpoint.lg) {
        return amount + 4;
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
