import 'normalize.css';
import 'bulma/css/bulma.min.css';
import './App.css';

import { Main, Auth } from './pages/';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm as solidFilm } from '@fortawesome/free-solid-svg-icons'
import { Box } from 'react-bulma-components';

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

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <FontAwesomeIcon className='app-title-logo' icon={solidFilm} />
        <h1 className='app-title'> Movie Rater</h1>
      </header>
      <Box style={{
        height: '83vh',
        maxHeight: '83vh',
        backgroundColor: 'inherit',
        border: '1px solid #48c78e',
        color: '#ccc',
        textAlign: 'center'
      }}>
        <RouterProvider router={router} />
      </Box>
    </div >
  );
}

export default App;
