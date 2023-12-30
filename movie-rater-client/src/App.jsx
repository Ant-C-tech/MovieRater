import 'normalize.css';
import './App.css';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm as solidFilm } from '@fortawesome/free-solid-svg-icons'

import { MovieList, MovieDetails, MovieEditForm } from './components/';

import { getMovies } from './api/';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editedMovieId, setEditedMovieId] = useState(null);

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
        <FontAwesomeIcon className='app-title-icon' icon={solidFilm} />
        <h1 className='app-title'>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList
          movies={movies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
          setEditedMovieId={setEditedMovieId}
        />

        {editedMovieId ?
          <MovieEditForm
            editedMovieId={editedMovieId}
            movies={movies}
            setMovies={setMovies} />
          :
          <MovieDetails
            selectedMovieId={selectedMovieId}
            movies={movies}
            setMovies={setMovies} />
        }
      </div>
    </div>
  );
}

export default App;
