import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.moviesWrapper}>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.moviesItem}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
            >
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;