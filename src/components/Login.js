import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth';
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      document.cookie = "myCookie=myValue; SameSite=None; Secure";

      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }));
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67sSlt0mXyUSICtBiwidtvglgZV8q1pq8kXVCdPZ-0jRQfXXxwdkzgXmCEjRPtNAZtnw&usqp=CAU' alt='gmail logo' />

        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>

    </div>
  )
}

export default Login;