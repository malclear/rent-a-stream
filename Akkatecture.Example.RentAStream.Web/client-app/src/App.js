import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import NavMenu from './components/nav-menu';
import {MovieAppProvider} from './context/movie-app-context';
import Login from './pages/login';
import Account from './pages/account';
import Movies from './pages/movies';
import Admin from './pages/admin';

function App() {
  return (
      <MovieAppProvider>
          <Router> 
              <NavMenu/>
              <div className='container'>
                  <Routes>
                      <Route path='/' element={ <Movies /> }          />
                      <Route path='/login' element={< Login />}       />
                      <Route path='/admin' element={< Admin />}       />
                      <Route path='/account' element={< Account />}   />
                  </Routes>
              </div>
          </Router>
      </MovieAppProvider>

  );
}

export default App;
