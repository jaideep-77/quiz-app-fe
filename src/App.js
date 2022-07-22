import { Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import { auth } from './firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Protected from './components/Protected';

function App() {

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} >
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Route>
        <Route exact path='/game' element={
          <Protected isLoggedIn={user}>
            <Game user={user} />
          </Protected>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
