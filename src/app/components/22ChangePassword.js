'use client'

import React, { useState } from 'react';
import axios from 'axios';
// import { useRouter } from 'next/navigation';
import style from "@/app/styles/LoginSignup.module.css";
import { toast } from 'react-toastify';

const ChangePassword = () => {
    // const router = useRouter();

    const [formData, setFormData] = useState({
        password: '',
        password_confirmation: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('User not logged in');
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios.post('/api/UserLogin/changePassword', formData, config);
            console.log(response);

            if (response.data.status === 'failed') {
                setError(response.data.message);
            }
            else if (response.data.status === 'success') {
                setSuccess('Password changed successfully');

                setFormData({
                    password: '',
                    password_confirmation: ''
                });

                // Optionally, navigate to another page
                // router.push('/');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h2 className={style.heading2}>Change Password</h2>
                {error && <p className={style.error}>{error}</p>}
                {success && <p className={style.success}>{success}</p>}
                <div className={style.input_group}>
                    <label htmlFor="password" className={style.labelClass}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your new password"
                        onChange={handleChange}
                        value={formData.password}
                        autoComplete="off"
                        className={style.input}
                    />
                </div>
                <div className={style.input_group}>
                    <label htmlFor="password_confirmation" className={style.labelClass}>Confirm Password</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirm your new password"
                        onChange={handleChange}
                        value={formData.password_confirmation}
                        autoComplete="off"
                        className={style.input}
                    />
                </div>
                <div className={style.submit_button}>
                    <button type="submit" className={style.button}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
