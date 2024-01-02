
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus as solidPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Columns } from 'react-bulma-components';


import { MovieList, MovieDetails, EditMovie, CreateMovie } from '../../components/';
import { API } from '../../api/';

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editedMovieId, setEditedMovieId] = useState(null);
  const [isCreatingMovie, setIsCreatingMovie] = useState(false);

  const storeMovies = async () => {
    const movies = await API.getMovies();
    setMovies(movies);
  }

  useEffect(() => {
    storeMovies();
  }, []);

  return (
    <>
      <Button className='button-success' color="success" onClick={() => {
        setSelectedMovieId(null);
        setEditedMovieId(null);
        setIsCreatingMovie(true);
      }
      }>
        <FontAwesomeIcon className='button-icon' icon={solidPlus} />
      </Button>
      <Columns>
        <Columns.Column>
          <MovieList
            movies={movies}
            setMovies={setMovies}
            selectedMovieId={selectedMovieId}
            setSelectedMovieId={setSelectedMovieId}
            setEditedMovieId={setEditedMovieId}
            setIsCreatingMovie={setIsCreatingMovie}
          />
        </Columns.Column>

        <Columns.Column>
          {editedMovieId ?
            <EditMovie
              editedMovieId={editedMovieId}
              setEditedMovieId={setEditedMovieId}
              movies={movies}
              setMovies={setMovies}
              setIsCreatingMovie={setIsCreatingMovie}
            /> :
            isCreatingMovie ?
              <CreateMovie
                movies={movies}
                setMovies={setMovies}
                setIsCreatingMovie={setIsCreatingMovie}
              />
              :
              <MovieDetails
                selectedMovieId={selectedMovieId}
                movies={movies}
                setMovies={setMovies}
                setIsCreatingMovie={setIsCreatingMovie}
              />
          }
        </Columns.Column>
      </Columns>
    </>
  )
};
