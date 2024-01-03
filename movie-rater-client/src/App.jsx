import 'normalize.css';
import 'bulma/css/bulma.min.css';
import './App.css';

import { useState, createContext, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm as solidFilm } from '@fortawesome/free-solid-svg-icons'
import { Box } from 'react-bulma-components';

import { Main, Auth } from './pages/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export const TokenContext = createContext(null);

function App() {

  const [token, setToken] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className='app-title'> Movie  <FontAwesomeIcon className='app-title-logo' icon={solidFilm} />  Rater</h1>
      </header>
      <Box style={{
        height: '90vh',
        maxHeight: '90vh',
        backgroundColor: 'inherit',
        border: '1px solid #48c78e',
        color: '#ccc',
        textAlign: 'center'
      }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <RouterProvider router={router} />
        </TokenContext.Provider>
      </Box>
    </div >
  );
}

export default App;
