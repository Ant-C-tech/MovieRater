import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck as solidCheck } from '@fortawesome/free-solid-svg-icons'

export const MovieList = ({ movies, selectedMovieId, setSelectedMovieId }) => {
  return (
    <div className='movie-list-wrapper'>
      <h2 className="movie-list-title">Movie List</h2>
      <ul className='movie-list'>
        {movies && movies.map(movie => {
          return (
            <li className='movie-list-item'
              key={movie.id}
              onClick={() => setSelectedMovieId(movie.id)}
            >
              {selectedMovieId === movie.id &&
                <FontAwesomeIcon className='movie-list-item-icon' icon={solidCheck} />
              }
              <span className='movie-list-item-text'>{movie.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};
