import './MoviesCardList.css';
import movies from '../../../utils/movies';
import savedMovies from '../../../utils/savedMovies';
import { useLocation } from "react-router-dom";
import MovieCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const location = useLocation()
  return (
    <section className='movies-card-list'>
      {location.pathname === '/movies' &&
        <>
          <ul className='movies-grid'>
            {
              movies.map(movie =>
                <li className='movies-grid__container'>
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />
                </li>
              )
            }
          </ul>
          <button className='movies__btn-more' type='button' title='Ещё' aria-label='Кнопка ещё'>Ещё</button>
        </>
      }
      {location.pathname === '/saved-movies' &&
        <>
          <ul className='movies-grid movies-grid_saved-movies'>
            {
              savedMovies.map(movie =>
                <li className='movies-grid__container'>
                  <MovieCard
                    key={movie._id}
                    movie={movie}
                  />
                </li>
              )
            }
          </ul>
        </>
      }
    </section>
  )
}
export default MoviesCardList;