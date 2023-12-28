import 'bulma/css/bulma.min.css';
import "./style.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons'
import { Button } from "react-bulma-components";

import { getMovies, rateMovie } from "../../api/";

export const MovieDetails = ({ selectedMovieId, movies, setMovies }) => {
  const [temporaryUserRating, setTemporaryUserRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    setUserRating(0)
    setTemporaryUserRating(0)
  }, [selectedMovieId])

  useEffect(() => {
    console.log('movies', movies);
  }, [movies])

  if (selectedMovieId) {
    return (
      <div className="movie-details">
        <h2 className="movie-details-title">Movie Details</h2>
        <div className='movie-details-content'>
          <p className='movie-details-content-description'>
            {movies.find(movie => movie.id === selectedMovieId).description}
          </p>
          <p className='movie-details-content-stars'>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <FontAwesomeIcon key={index} icon={
                  movies.find(movie => movie.id === selectedMovieId).average_rating >= index + 1 ? solidStar
                    : lightStar} />
              )
            })}
          </p>
          <p className='movie-details-content-ratings'>
            <b>Number of ratings: {movies.find(movie => movie.id === selectedMovieId).number_of_ratings}</b>
          </p>
        </div>
        <div className='movie-details-user-rating-control'>
          <div className='movie-details-user-stars'>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <FontAwesomeIcon
                  className='user-rating-stars'
                  key={index} icon={temporaryUserRating > index ? solidStar : lightStar}
                  onMouseEnter={() => setTemporaryUserRating(index + 1)}
                  onMouseLeave={() => setTemporaryUserRating(userRating)}
                  onClick={() => {
                    setTemporaryUserRating(index + 1)
                    setUserRating(index + 1)
                  }
                  } />
              )
            })}
          </div>
          <Button className='rate-movie-button' onClick={
            () => {
              rateMovie(selectedMovieId, userRating).then(() => {
                getMovies()
                  .then(movies => setMovies(movies))
                  .catch(error => console.log(error))
              }).catch(error => console.log(error))
            }
          }>
            Rate the Movie
          </Button>
        </div>
      </div>
    )
  } else {
    return <div className="movie-details">
      <h2 className="movie-details-title">Movie Details</h2>
      <p>Select a movie to see its details</p>
    </div>
  }
}
