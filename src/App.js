import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import { AuthContext } from './context';
import About from './components/About';
import Login from './components/Login/Login';
import MainPage from './components/MainPage';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <div className='app'>
      <BrowserRouter>
      <Navbar/>
      {isAuth
        ? (
          <Routes>
            <Route path='/home' element={<MainPage/>} exact={true}/>
            <Route path='/contact' element={<Contact/>} exact={true}/>
            <Route path='/about' element={<About/>} exact={true}/>
            {/* redirect to home */}
            <Route 
                path="*"
                element={<Navigate to="/home" replace />}/>
          </Routes>
        )
          
        : (
          <Routes>
            <Route path='/' element={<Login/>} exact={true}/>
            {/* redirect to login */}
            <Route 
                path="*"
                element={<Navigate to="/" replace />}/>
          </Routes>
        )
        }
      </BrowserRouter>
      </div>
      
    </AuthContext.Provider>
  );
}

export default App;
