import React, { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../../services/api';
import MovieList from '../../../components/MovieList/MovieList';

const HomePage = () => {
  const [tremdingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrandingMovies();
        setTrandingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);
  return (
    <div>
      <MovieList movies={tremdingMovies} />
    </div>
  );
};

export default HomePage;