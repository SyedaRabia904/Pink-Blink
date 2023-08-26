import {React,  useState } from 'react';
import './login.css';
import { Form, Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    login(formData).then((data)=>{

      if(data.token){
        localStorage.setItem("token", data.token);
        navigate("/home");    
      }
    });

    
  };
  return (
    
  <div className="login-section">     
          <div className="box">
            <Form autoComplete="off" action="feed.html">
              <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
              <h2>Log In</h2>
              <div className="inputBox">
                <input type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="password"  value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                <span>Password</span>
                <i></i>
              </div>
              <div className="links">
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" onClick={handleLogin} />
              <div className="signup">
                <p>Don't have an account?</p>
                <Link className="signupcolor" to='/Signup'>
                  sign up
                </Link>
              </div>
            </Form>
          </div>
        </div>
  );
};

export default LoginPage;
