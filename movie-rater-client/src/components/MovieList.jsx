export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        {movies && movies.map(movie => {
          return (
            <li key={movie.id}>
              {movie.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
};
