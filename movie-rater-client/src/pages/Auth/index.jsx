import "./style.css";

import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket as solidRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Box } from 'react-bulma-components';

import { API } from '../../api/';
import { TokenContext } from '../../App';

const { Field, Label, Input, Control } = Form;

export const Auth = () => {
  const { token, setToken } = useContext(TokenContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      window.location.href = '/';
    }
  }, [token]);

  const loginUser = async () => {
    try {
      const response = await API.loginUser({ username, password });
      setToken(response.token);
    } catch (error) {
      console.error('There was a problem with the login operation: ', error);
    }
  };

  return (
    <div className='auth-wrapper'>
      <h2 className="auth-form-title">Login</h2>
      <Box style={{
        width: '50%',
        margin: '0 auto 20px',
        backgroundColor: 'inherit',
        color: '#ccc',
        textAlign: 'center'
      }}>
        <Field>
          <Label className='auth-form-label' size='medium'>
            Name
          </Label>
          <p>150 characters or fewer. Letters, digits and @/./+/-/_ only.</p><br />
          <Control>
            <Input
              placeholder='e.g. John Doe'
              type="text"
              value={username}
              maxLength={150}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <Label className='auth-form-label' size='medium'>
            Password
          </Label>
          <Control>
            <Input
              placeholder='e.g. qwertyqwerty'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Control>
        </Field>
      </Box>
      <div className='auth-controls'>
        <Button className='button-custom' onClick={loginUser}>
          <FontAwesomeIcon className='button-icon' icon={solidRightToBracket} />
          Login
        </Button>
      </div>
    </div>
  )
};
