import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import { AuthContext } from './context';
import About from './components/About';
import Login from './components/Login/Login';
import Admin from "./components/Admin";
import User from "./components/User";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isAdmin, setIsAdmin}}>
      <div className='app'>
      <BrowserRouter>
      <Navbar/>
      {isAuth
        ? (
          <Routes>
            {isAdmin
            ?
              (
                <>
                <Route path='/admin/home' element={<Admin/>} exact={true}/>
                <Route path='/admin/contact' element={<Contact/>} exact={true}/>
                <Route path='/admin/about' element={<About/>} exact={true}/>
                {/* redirect to home */}
                <Route 
                  path="*"
                  element={<Navigate to="/admin/home" replace />}/>
                </>
              )
            : (
              <>
                <Route path='/user/home' element={<User/>} exact={true}/>
                <Route path='/user/about' element={<About/>} exact={true}/>
                {/* redirect to home */}
                <Route 
                  path="*"
                  element={<Navigate to="/user/home" replace />}/>
              </>
              )
            }
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
