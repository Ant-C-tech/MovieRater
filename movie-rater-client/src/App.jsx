import 'normalize.css';
import './App.css';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm as solidFilm } from '@fortawesome/free-solid-svg-icons'
import { faPlus as solidPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bulma-components';


import { MovieList, MovieDetails, EditMovie, CreateMovie } from './components/';
import { API } from './api';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editedMovieId, setEditedMovieId] = useState(null);
  const [isCreatingMovie, setIsCreatingMovie] = useState(false);

  const storeMovies = async () => {
    const movies = await API.getMovies();
    setMovies(movies);
  }

  useEffect(() => {
    storeMovies();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <FontAwesomeIcon className='app-title-logo' icon={solidFilm} />
        <h1 className='app-title'> Movie Rater</h1>
        <Button className='button-success' color="success" onClick={() => {
          setSelectedMovieId(null);
          setEditedMovieId(null);
          setIsCreatingMovie(true);
        }
        }>
          <FontAwesomeIcon className='button-icon' icon={solidPlus} />
        </Button>
      </header>
      <div className="layout">
        <MovieList
          movies={movies}
          setMovies={setMovies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
          setEditedMovieId={setEditedMovieId}
          setIsCreatingMovie={setIsCreatingMovie}
        />

        {editedMovieId ?
          <EditMovie
            editedMovieId={editedMovieId}
            setEditedMovieId={setEditedMovieId}
            movies={movies}
            setMovies={setMovies}
            setIsCreatingMovie={setIsCreatingMovie}
          /> :
          isCreatingMovie ?
            <CreateMovie
              movies={movies}
              setMovies={setMovies}
              setIsCreatingMovie={setIsCreatingMovie}
            />
            :
            <MovieDetails
              selectedMovieId={selectedMovieId}
              movies={movies}
              setMovies={setMovies}
              setIsCreatingMovie={setIsCreatingMovie}
            />
        }
      </div>
    </div >
  );
}

export default App;
