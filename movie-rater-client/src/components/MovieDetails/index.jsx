import "./style.css";

export const MovieDetails = ({ selectedMovie }) => {
  return (
    <div className="movie-details">
      <h2 className="movie-details-title">Movie Details</h2>
      {selectedMovie && <p>{selectedMovie.description}</p>}
    </div>
  )
};
