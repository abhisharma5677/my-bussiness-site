'use client'

import React, { useState } from 'react'
import style from "@/app/styles/LoginSignup.module.css"
import { signUpFunction } from '@/services/dataFetching';
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";


const SignUp = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
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

            const result = await signUpFunction(formData)
            // console.log(result)

            if (result.data.success) {
                //toast message for successfully login...
                toast.success("User Registered Successfully...", {
                    position: "top-center"
                })

                // After signup moving to the login page
                router.push('/LoginPage');
            }

        } catch (error) {

            console.log(error);
            toast.error("Error in Sign Up !!", {
                position: "top-center"
            })

        }

        setFormData({
            username: '',
            email: '',
            password: '',
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.signup_container}>
                <h2>Sign Up</h2>
                <div className={style.input_group}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username"
                        onChange={handleChange} value={formData.username} autoComplete='off' />
                </div>
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
                <div className={style.submit_button}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default SignUp