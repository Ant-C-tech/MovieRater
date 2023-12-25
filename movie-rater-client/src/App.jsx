import './App.css';

import { useState, useEffect } from 'react';

import { MovieList, MovieDetails } from './components/';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 94df7a83ced3f398b7622adeac6b4f44320e3ae8'
      },
    }).then(resp => resp.json())
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
