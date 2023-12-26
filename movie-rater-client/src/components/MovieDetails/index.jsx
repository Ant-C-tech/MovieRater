import "./style.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons'

export const MovieDetails = ({ selectedMovie }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!selectedMovie) return;
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        selectedMovie.average_rating >= i ? <FontAwesomeIcon key={i} icon={solidStar} /> : <FontAwesomeIcon key={i} icon={lightStar} />
      );
    }
    setStars(stars);
  }, [selectedMovie]);

  if (selectedMovie) {
    return (
      <div className="movie-details">
        <h2 className="movie-details-title">Movie Details</h2>
        {selectedMovie &&
          <div>
            <p>
              {selectedMovie.description}
            </p>
            {stars}
            <p>Number of ratings: {selectedMovie && selectedMovie.number_of_ratings}</p>
          </div>}
      </div>
    )
  } else {
    return <div className="movie-details">
      <h2 className="movie-details-title">Movie Details</h2>
      <p>Select a movie to see its details</p>
    </div>
  }
}
