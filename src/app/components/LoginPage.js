'use client'

import React from 'react'
import { useState } from 'react';
import style from "@/app/styles/LoginSignup.module.css"
import { loginFunction } from '@/services/dataFetching';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';
import LoginContext from '../context/LoginContext';
import { useContext } from 'react';


const LoginPage = () => {

  const router = useRouter();

  const {setLogin} = useContext(LoginContext);
  const {login} = useContext(LoginContext);

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

      const result = await loginFunction(formData)
      // console.log(result)
      
      if (result.data.success) {
        //toast message for successfully login...
        toast.success("User Login Succesfull...", {
          position: "top-center"
        })


        // Navigation
        router.push('/CreatePost');

        //If user Login succesful then set the login context to true
        setLogin(!login);

      }

    } catch (error) {

      console.log(error);

      toast.error("Error in Login !!", {
        position: "top-center"
      })

    }

    setFormData({
      email: '',
      password: '',
    })
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