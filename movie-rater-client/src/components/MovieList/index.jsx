import "./style.css";

export const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <div>
      <h2 className="movie-list-title">Movie List</h2>
      <ul className='movie-list'>
        {movies && movies.map(movie => {
          return (
            <li className='movie-list-item' key={movie.id} onClick={() => setSelectedMovie(movie)}>
              {movie.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
};
