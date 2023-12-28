import 'bulma/css/bulma.min.css';
import "./style.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons'
import { Button } from "react-bulma-components";

export const MovieDetails = ({ selectedMovie }) => {
  const [temporaryUserRating, setTemporaryUserRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    setUserRating(0)
    setTemporaryUserRating(0)
  }, [selectedMovie])

  const rateMovie = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${selectedMovie.id}/rate_movie/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 94df7a83ced3f398b7622adeac6b4f44320e3ae8'
      },
      body: JSON.stringify({ stars: userRating + 1 })
    }).then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  }


  if (selectedMovie) {
    return (
      <div className="movie-details">
        <h2 className="movie-details-title">Movie Details</h2>
        {selectedMovie &&
          <div className='movie-details-content'>
            <p className='movie-details-content-description'>
              {selectedMovie.description}
            </p>
            <p className='movie-details-content-stars'>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <FontAwesomeIcon key={index} icon={selectedMovie.average_rating >= index ? solidStar : lightStar} />
                )
              })}
            </p>
            <p className='movie-details-content-ratings'>
              <b>Number of ratings: {selectedMovie && selectedMovie.number_of_ratings}</b>
            </p>
          </div>}
        <div className='movie-details-user-rating-control'>
          <div className='movie-details-user-stars'>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <FontAwesomeIcon
                  className='user-rating-stars'
                  key={index} icon={temporaryUserRating >= index ? solidStar : lightStar}
                  onMouseEnter={() => setTemporaryUserRating(index)}
                  onMouseLeave={() => setTemporaryUserRating(userRating)}
                  onClick={() => {
                    setTemporaryUserRating(index)
                    setUserRating(index)
                  }
                  } />
              )
            })}
          </div>
          <Button className='rate-movie-button' onClick={() => rateMovie()}>
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
