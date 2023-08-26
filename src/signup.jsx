import React, { useState } from 'react';
import './signup.css'; 
import { Form, Link, useNavigate } from 'react-router-dom';
import { register } from './services/admin.service';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleRegister = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("phonenumber", phonenumber);

    register(formData).then((user)=>{
      if(user){
        navigate("/login");
        console.log(user)
      }
    });

  };
  return (
    <div className="login-section"> 
    <div className="box2">
      <Form onSubmit={handleRegister} >
        <img id="customlogo" src="/pinkblink icon.PNG" alt="logo image" />
        <h2>Sign Up</h2>
        <div className="inputBox2">
          <input type="text"  value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
          <span>Username</span>
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
          <input type="text" value={phonenumber} required onChange={(e) => setPhonenumber(e.target.value)}/>
          <span>Phone Number</span>
          <i></i>
        </div>
       
        <div className="inputBox2">
          <input type="text" value={gender} required onChange={(e) => setGender(e.target.value)}/>
          <span>Gender</span>
          <i></i>
        </div>
       

        <input type="submit" value="Sign Up"  />
        <div className="signup">
          <p>Already have an account?</p>
          <Link className="signupcolor" to='/login'>Login</Link>
        </div>
      </Form>
    </div></div>
  );
}

export default Signup;
