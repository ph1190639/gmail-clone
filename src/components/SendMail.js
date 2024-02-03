import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./SendMail.css"
import { Button } from '@mui/material';
import {useForm} from "react-hook-form"
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function SendMail() {

  const {register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const emailsCollection = collection(db, 'emails');
      await addDoc(emailsCollection, {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      dispatch(closeSendMessage())
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())}/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' placeholder='To' type='email' {...register('to', { required: true })}/>
        
        <input name='subject' placeholder='Subject' type='text' {...register('subject', { required: true })}/>
        <input name='message' placeholder='message...' type='text' className='sendMail__message' {...register('message', { required: true })}/>

        <div className='sendMail__options'>
          <Button type="submit" className='sendMail__send'>Send</Button>
        </div>
      </form>

    </div>
  )
}

export default SendMail;