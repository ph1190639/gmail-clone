import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./SendMail.css"
import { Button } from '@mui/material';
import {useForm} from "react-hook-form"
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';


function SendMail() {

  const {register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    


    reset();
  }
  

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