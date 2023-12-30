import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck as solidCheck } from '@fortawesome/free-solid-svg-icons'
import { faEdit as solidEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash as solidTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bulma-components";

export const MovieList = ({ movies, selectedMovieId, setSelectedMovieId, setEditedMovieId }) => {

  return (
    <div className='movie-list-wrapper'>
      <h2 className="movie-list-title">Movie List</h2>
      <ul className='movie-list'>
        {movies && movies.map(movie => {
          return (
            <li className='movie-list-item'
              key={movie.id}
            >
              <div className="movie-list-item-text">
                {selectedMovieId === movie.id &&
                  <FontAwesomeIcon className='movie-list-item-icon' icon={solidCheck} />
                }
                <span className='movie-list-item-text'
                  onClick={() => {
                    setSelectedMovieId(movie.id)
                    setEditedMovieId(null)
                  }}>
                  {movie.title}
                </span>
              </div>
              <div className="movie-controls">
                <Button className='button' onClick={() => {
                  setSelectedMovieId(movie.id)
                  setEditedMovieId(movie.id)
                }}>
                  <FontAwesomeIcon className='button-icon' icon={solidEdit} />
                </Button>
                <Button className='button'>
                  <FontAwesomeIcon className='button-icon' icon={solidTrash} />
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
};
