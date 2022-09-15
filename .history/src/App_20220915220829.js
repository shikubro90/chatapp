import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>

          </Route>
        </Routes>
      </BrowserRouter>

      <Register/>
      {/* <Login/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
