import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

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
