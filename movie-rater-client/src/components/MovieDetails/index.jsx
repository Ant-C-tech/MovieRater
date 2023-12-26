import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const MovieDetails = ({ selectedMovie }) => {
  console.log(selectedMovie);
  return (
    <div className="movie-details">
      <h2 className="movie-details-title">Movie Details</h2>
      {selectedMovie &&
        <div>
          <p>
            {selectedMovie.description}
          </p>
          {
            // return a selectedMovie.average_rating number of stars
            // if the is average_rating not an integer, round it up (temporary solution)
            [...Array(Math.ceil(selectedMovie.average_rating))].map((_e, i) => <FontAwesomeIcon key={i} icon={faStar} />)
          }
        </div>}
    </div>
  )
};
