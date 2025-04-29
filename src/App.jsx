import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('../src/assets/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../src/assets/pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../src/assets/pages/MovieDetailsPage/MovieDetailsPage')
);

const Cast = lazy(() => import('../src/components/MovieCast/MovieCast'));
const Reviews = lazy(() => import('../src/components/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() =>
  import('../src/assets/pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;