import "./style.css";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket as solidRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Button, Form } from 'react-bulma-components';

const { Field, Label, Input, Control } = Form;

export const Auth = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='auth-wrapper'>
      <h2 className="auth-title">Login</h2>
      <Field>
        <Label className='auth-label' size='medium'>
          Name
        </Label>
        <Control>
          <Input
            placeholder='e.g. John Doe'
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </Control>
      </Field>
      <Field>
        <Label className='movie-form-label' size='medium'>
          Password
        </Label>
        <Control>
          <Input
            placeholder='e.g. qwertyqwerty'
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Control>
      </Field>
      <div className='auth-controls'>
        <Button className='button-custom'>
          <FontAwesomeIcon className='button-icon' icon={solidRightToBracket} />
          Login
        </Button>
      </div>
    </div>
  )
};
