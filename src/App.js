import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
import { AuthProvider } from './Auth/AuthProvider';

function App() {

  return (
    <div className='bg-gradient-to-b from-indigo-600 to-indigo-300 max-h-full min-h-screen w-full'>
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
    </div>
  );
}

export default App;
