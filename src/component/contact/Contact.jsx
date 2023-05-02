import React, { useState,useRef, createRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss"
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  const[message,setMessage]=useState(false)
  const inputname = useRef();
  const inputEmail = useRef();
  const message1 = useRef();
  const form = useRef();

  const handelSubmit =  (e) =>{
      e.preventDefault();
      emailjs.sendForm('service_pngcwii', 'template_7wfn3ja', form.current, 'mAlHJaab1IDfLZCtu')
      .then((result) => {
          console.log(result.text);
          setMessage(true)
          
      }, (error) => {
          console.log(error.text);
      });
      inputname.current.value='';
      inputEmail.current.value='';
      message1.current.value='';
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handelSubmit} >
        <input ref={inputname} type="text" name='user_name' placeholder='Name' required />
          <input ref={inputEmail} type="email" name='user_email' placeholder='Email'required />
          <textarea ref={message1} name='message' placeholder='Message' required></textarea>
          <button type="submit" >Send</button>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9461096095</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>SS387403@gmail.com</span>
          </div>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
