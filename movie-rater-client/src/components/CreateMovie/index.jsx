import { useState, useContext } from 'react';
import { Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus as solidPlus } from '@fortawesome/free-solid-svg-icons'

import { API } from '../../api';
import { MovieForm } from '../MovieForm';
import { TokenContext } from '../../App';

export const CreateMovie = ({ movies, setMovies, setIsCreatingMovie }) => {
  const { token } = useContext(TokenContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createMovie = async () => {
    const newMovie = {
      title,
      description
    }
    try {
      const movie = await API.createMovie(newMovie, token);
      setMovies([...movies, movie]);
    } catch (error) {
      console.error('There was a problem with the create operation: ', error);
    }
    setIsCreatingMovie(false);
  };

  return (
    <div className='movie-form-wrapper'>
      <h2 className="movie-form-title">Create the Movie</h2>
      <MovieForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
      <Button
        className='button-custom'
        onClick={createMovie}
      >
        <FontAwesomeIcon className='button-icon' icon={solidPlus} />
        Create
      </Button>
    </div>
  )
};
