import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './style.scss'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext)

  const protectedRoute = ()=>{
    if(!currentUser){
      return(
        <Navigate to="/login"/>
      )
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Navigate></Navigate> <Home/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
