import './App.css';

import { useState, useEffect } from 'react';

import { MovieList, MovieDetails } from './components/';

import { getMovies } from './api/';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const storeMovies = async () => {
    const movies = await getMovies();
    setMovies(movies);
  }

  useEffect(() => {
    storeMovies();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList
          movies={movies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId} />
        <MovieDetails
          selectedMovieId={selectedMovieId}
          movies={movies}
          setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;
