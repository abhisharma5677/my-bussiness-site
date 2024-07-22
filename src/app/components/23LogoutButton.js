'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import style from "@/app/styles/LoginSignup.module.css"


const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');

        // Optionally, you can also clear other related data here

        // Redirect to the login page or any other page
        router.push('/LoginPage');
    };

    return (
        <button onClick={handleLogout} className={style.LogoutButton}>LOGOUT</button>
    );
};

export default LogoutButton;






