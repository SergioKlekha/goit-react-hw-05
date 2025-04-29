import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../assets/services/api';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(params.movieId);
        if (castData && Array.isArray(castData)) {
          setCast(castData);
        } else {
          setCast([]);
        }
      } catch (error) {
        console.log(error);
        setCast([]);
      }
    };
    getCast();
  }, [params.movieId]);

  return (
    <div>
      <h2 className={s.castTitle}>Cast</h2>
      <ul className={s.castList}>
        {cast.length > 0 ? (
          cast.map((actor) => (
            <li key={actor.id} className={s.casListItem}>
              <p>
                {actor.name} as {actor.character}
              </p>
            </li>
          ))
        ) : (
          <p>No cast information...</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;