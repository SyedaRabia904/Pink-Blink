import React from "react";
import { Link } from "react-router-dom";

export function Myinfo() {

  // Sample hardcoded values
  const hardcodedFullName = "John Doe";
  const hardcodedEmail = "john@example.com";
  const hardcodedPhoneNumber = "123-456-7890";
  const hardcodedGender = "male"; // You can replace this with your desired value

  return (
    <>
      <div className="login-section">
        <div className="box2">
          <form>
            <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
            <h2>Sign Up</h2>
            <div className="inputBox2">
              {/* Hardcoded full name */}
              <input type="text" value={hardcodedFullName} readOnly />
              <span>Full Name</span>
              <i></i>
            </div>
            <div className="inputBox2">
              {/* Hardcoded email */}
              <input type="email" value={hardcodedEmail} readOnly />
              <span>Email Address</span>
              <i></i>
            </div>
            <div className="inputBox2">
              {/* Hardcoded phone number */}
              <input type="text" value={hardcodedPhoneNumber} readOnly />
              <span>Phone Number</span>
              <i></i>
            </div>
            <div className="inputBox2">
              <label htmlFor="gender" className="inputLabel">Gender</label>
              {/* Hardcoded gender */}
              <select name="gender" id="gender" className="inputField" value={hardcodedGender} readOnly>
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
      </div>
    </>
  )
}
