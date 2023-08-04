'use client'

import style from "@/app/styles/contact.module.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xj0zlhq', 'template_lgquy1k', form.current, 'ndqTDoS1VRHPUARWU')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent succesfully")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={style.bigFormContainer}>

      <div className={style.form_description}>
        <h1><u>Contact Form</u></h1>
      </div>


      <div className={style.form_container}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={style.form_group}>
            <label className={style.form_label} for="name">Name:</label>
            <input className={style.form_input} type="text"
              name="user_name" placeholder="Enter your name" required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="user_email">Email:</label>
            <input className={style.form_input} type="email"
              name="user_email" placeholder="Enter your email" required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="user_phone">Phone:</label>
            <input className={style.form_input} type="number"
              name="user_phone" placeholder="Enter your phone number" required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="message">Message:</label>
            <textarea className={style.form_textarea}
              name="message" placeholder="Send your message" required
              autoComplete="off">
            </textarea>
          </div>

          <div className={style.form_flex}>
             <input className={style.form_submit} type="submit" value="Send" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default ContactForm