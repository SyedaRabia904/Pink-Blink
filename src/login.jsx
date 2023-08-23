import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <div className='background'>
       
          <div className="box">
            <form autoComplete="off" action="feed.html">
              <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
              <h2>Log In</h2>
              <div className="inputBox">
                <input type="text" required />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <span>Password</span>
                <i></i>
              </div>
              <div className="links">
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" />
              <div className="signup">
                <p>Don't have an account?</p>
                <Link className="signupcolor" to='/Signup'>
                  sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      
 
  );
};

export default LoginPage;
