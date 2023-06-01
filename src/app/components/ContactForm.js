'use client'

import style from "@/app/styles/contact.module.css"
import { useState } from "react"

const ContactForm = () => {


  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })


  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((previous) => (
      {
        ...previous,
        [name]: value
      }))
  }


  const handleSubmit = async (e) => {

    try {

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      })

    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className={style.bigFormContainer}>

      <div className={style.form_description}>
        <p>Fill this form to contact us</p>
        <p>Give your suggestions </p>
        <p>Give your reviews</p>
      </div>


      <div className={style.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={style.form_group}>
            <label className={style.form_label} for="name">Name:</label>
            <input className={style.form_input} type="text" id="name"
              name="name" placeholder="Enter your name" value={user.name}
              onChange={handleChange} required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="email">Email:</label>
            <input className={style.form_input} type="email" id="email"
              name="email" placeholder="Enter your email" value={user.email}
              onChange={handleChange} required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="phone">Phone:</label>
            <input className={style.form_input} type="number" id="phone"
              name="phone" placeholder="Enter your phone number" value={user.phone}
              onChange={handleChange} required
              autoComplete="off"
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form_label} for="message">Message:</label>
            <textarea className={style.form_textarea} id="message"
              name="message" placeholder="Send your message" value={user.message}
              onChange={handleChange} required
              autoComplete="off">
            </textarea>
          </div>

          <div className={style.form_flex}>
            <button className={style.form_submit} type="submit">Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ContactForm