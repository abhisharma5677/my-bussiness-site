'use client'

import React, { useState } from 'react'
import style from "@/app/styles/LoginSignup.module.css"
import { signUpFunction } from '@/services/dataFetching';
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";
import axios from 'axios';


const SignUp = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        tc: false
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        console.log(formData)

        try {

            const response = await axios.post('/api/UserLogin/register', formData);

            console.log(response);
            

            if (response.message === 'Email already exists') {
                setError('Email already exist !!')
            }
            if (response.message === 'All fields are required') {
                setError('All Fields are required !!')
            }
            if (response.message === "Password and Confirm Password doesn't match") {
                setError('Password and confirm password does not match !!')
            }
            if (response.message === 'Unable to Register') {
                setError('Unable to register, internal server error !!')
            }


            if (response.status === 201) {
                setSuccess('User registered successfully');


                // Store the token in local storage
                localStorage.setItem('token', response.data.token);


                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    tc: false
                });


                // Navigation
                router.push('/cart');
            }

        }

        catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.signup_container}>
                    <h2>Sign Up</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <div className={style.input_group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your username"
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
                    <div className={style.input_group}>
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Enter your password"
                            onChange={handleChange} value={formData.password_confirmation} autoComplete='off' />
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="tc"
                                checked={formData.tc}
                                onChange={handleChange}
                                required
                            />
                            Accept Terms and Conditions
                        </label>
                    </div>
                    <div className={style.submit_button}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp




