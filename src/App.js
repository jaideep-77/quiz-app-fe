import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Protected from './components/Protected';
import Game from './components/Game';
import { AuthProvider } from './Auth/AuthProvider';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Home />} >
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Route>
            <Route path='*' element={<Protected />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
