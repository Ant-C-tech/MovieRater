import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div className="">
          <h2>Movie List</h2>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  {movie.title}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="">Movie Detail</div>
      </div>
    </div>
  );
}

export default App;
