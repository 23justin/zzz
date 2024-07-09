import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Ensure you have CSS for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        alert('Successfully created account');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
        alert("Password should be at least 6 characters");
      });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
        <h1>Create Your Travel Account</h1>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
