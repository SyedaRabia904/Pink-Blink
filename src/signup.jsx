import React, { useState } from 'react';
import './signup.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    register(formData).then((user)=>{
      if(user){
        navigate("/login");
      }
    });

  };
  return (
    <div className="login-section"> 
    <div className="box2">
      <form>
        <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
        <h2>Sign Up</h2>
        <div className="inputBox2">
          <input type="text"  value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
          <span>Full Name</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="email"  value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
          <span>Email Address</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="password"  required  value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
          <span>Password</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="password" name="confirm_password" required />
          <span>Confirm Password</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="text" name="phone" required />
          <span>Phone Number</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <label htmlFor="gender" className="inputLabel">Gender</label>
          <select name="gender" id="gender" className="inputField">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <span className="inputHighlight"></span>
        </div>
        <input type="submit" value="Sign Up"  onClick={handleRegister} />
        <div className="signup">
          <p>Already have an account?</p>
          <Link className="signupcolor" to='/login'>Login</Link>
        </div>
      </form>
    </div></div>
  );
}

export default Signup;
