import React from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="box2">
      <form>
        <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
        <h2>Sign Up</h2>
        <div className="inputBox2">
          <input type="text" name="name" required />
          <span>Full Name</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="email" name="email" required />
          <span>Email Address</span>
          <i></i>
        </div>
        <div className="inputBox2">
          <input type="password" name="password" required />
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
        <input type="submit" value="Sign Up" />
        <div className="signup">
          <p>Already have an account?</p>
          <Link className="signupcolor" to='/login'>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
