import "./style.css";

import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk as solidFloppy } from '@fortawesome/free-solid-svg-icons'

import { getMovieById } from '../../utils/getMovieById';

const { Field, Label, Input, Textarea, Control } = Form;

export const MovieEditForm = ({ editedMovieId, movies, setMovies }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const movie = getMovieById(editedMovieId, movies);
    setTitle(movie.title);
    setDescription(movie.description);
  }
    , [movies, editedMovieId]);


  return (
    <div className='movie-edit-form-wrapper'>
      <h2 className="movie-edit-form-title">Edit the Movie</h2>
      <div className="movie-edit-form">
        <Field>
          <Label className='movie-edit-form-label' size='medium'>
            Movie Title
          </Label>
          <Control>
            <Input
              value={title}
              type="text"
              onChange={(event) => setTitle(event.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Label className='movie-edit-form-label' size='medium'>
            Movie Description
          </Label>
          <Control>
            <Textarea
              value={description}
              type="text"
              rows={6}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Control>
        </Field>
        <Button className='button'>
          <FontAwesomeIcon className='button-icon' icon={solidFloppy} />
          Save
        </Button>
      </div>
    </div>
  )
}
