import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">FDevs</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to='/Home'>Home</Link>
        <Link className="p-2 text-dark" to='/Contact'>Contact</Link>
        <Link className="p-2 text-dark" to='/About'>About</Link>
        <button onClick={logout} className='btn btn-primary'>Logout</button>
      </nav>
    </div>
  )
}