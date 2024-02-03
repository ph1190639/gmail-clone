import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from "react-redux"
import {selectSendMessageIsOpen} from "./features/mailSlice"
import Login from './components/Login';
import {login, selectUser} from './features/userSlice'
import { auth } from './components/firebase';

function App() {

  const sendMessageIsOpen =useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
        <Header />

        <div className='app__body'>
          <Sidebar/>
          <Routes>
            <Route path='/mail' element={<Mail/>} />
            
            <Route path='/' element={<EmailList/>} />
              
            
          </Routes>
      
        </div>
        {sendMessageIsOpen && <SendMail/>} 
      </div>

      )}
      
    </Router>
  );
}

export default App;
