import React, { useEffect, useState } from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { fetchMovieByQuery } from '../../services/api';
import MovieList from '../../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        try {
          const results = await fetchMovieByQuery(query);
          setMovies(results);
        } catch (error) {
          console.log(error);
        }
      };
      getMovies();
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === '') return;
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar value={query} handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;