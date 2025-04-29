import React, { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import { GoArrowLeft } from 'react-icons/go';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieById(params.movieId).then(setMovie);
  }, [params.movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <button
        className={s.goBackBtn}
        onClick={() => navigate(backLink.current)}
      >
        <GoArrowLeft className={s.arrowBtn} />
      </button>
      <div className={s.detailsWraper}>
        <img src={posterUrl} alt="movie poster" width="360px" />
        <div className={s.movieDetails}>
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.round((movie.vote_average * 100) / 10)} %</p>
          <p>Overwie: {movie.overview}</p>
        </div>
      </div>
      <ul className={s.aditionalInfo}>
        <li className={s.infoBtn}>
          <NavLink to={`/movies/${params.movieId}/cast`}> Cast</NavLink>
        </li>
        <li className={s.infoBtn}>
          <NavLink to={`/movies/${params.movieId}/reviews`}> Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;