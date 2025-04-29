import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../assets/services/api';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(params.movieId).then(setReviews);
  }, [params.movieId]);

  if (!reviews.length) {
    return (
      <div>
        <h2 className={s.reviewTitle}>Reviews</h2>
        <p className={s.noReviews}>No reviews</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={s.reviewTitle}>Reviews</h2>
      <ul className={s.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={s.reviewListItem}>
            <p className={s.author}>{review.author}:</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;