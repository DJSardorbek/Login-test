import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/index";
import "./login.css";
import axios from "axios";
import {API_URL} from '../../API/api';
import Loader from "../Loader";

export default function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(API_URL, {
      username,
      password
    })
    .then(res => {
      console.log(res);
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
      setIsLoading(false);
    })
    .catch(err => {setIsLoading(false); alert(err)});
  }
  return (
    <div className='login-container'>
      {isLoading ? <Loader/>: null}
      <form className="login" onSubmit={login}>
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input 
          required 
          type="text" 
          placeholder="Enter your name" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          />
        <input 
          required 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <input type="submit" value="Log In" />
      </form>
    </div>
    
  );
}
