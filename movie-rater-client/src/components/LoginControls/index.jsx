import "./style.css";

import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

export const LoginControls = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user-token']);

  return <nav className='login-controls'
    style={{ top: cookies['user-token'] ? '-56px' : '-45px' }}>
    {cookies['user-token'] ? <Link
      to='/'
      className='login-control'
      onClick={() => {
        removeCookie('user-token');
      }}>
      LogOut
    </Link> :
      <Link
        to='/auth'
        className='login-control'>
        LogIn
      </Link>
    }
  </nav>;
};
