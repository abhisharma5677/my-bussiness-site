'use client'

import React from 'react'
import { useState } from 'react';
import style from "@/app/styles/LoginSignup.module.css"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import LoginContext from '../context/LoginContext';
import { useContext } from 'react';
import axios from 'axios';


const LoginPage = () => {

  const router = useRouter();

  // const { setLogin } = useContext(LoginContext);
  // const { login } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.post('/api/UserLogin/login', formData);
      console.log(response)


      if (response.data.Success) {
        //toast message for successfully login...
        toast.success("User Login Succesfull...", {
          position: "top-center"
        })


        // Store the token in local storage
        localStorage.setItem('token', response.data.token);


        setFormData({
          email: '',
          password: '',
        })


        // Navigation
        router.push('/cart');


        //If user Login succesful then set the login context to true
        // setLogin(!login);
      }

    }
    catch (error) {

      // console.log(error);

      toast.error("Error in Login !!", {
        position: "top-center"
      })

    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className={style.login_container}>
        <h2>Login</h2>
        <div className={style.input_group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"
            onChange={handleChange} value={formData.email} autoComplete='off' />
        </div>
        <div className={style.input_group}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password"
            onChange={handleChange} value={formData.password} autoComplete='off' />
        </div>
        <div className={style.login_button}>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  )
}

export default LoginPage 

