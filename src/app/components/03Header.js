'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './03_1_Sidebar';
import styles from "@/app/styles/Header.module.css";
import LogoutButton from '../components/23LogoutButton'; // Adjust the import path as needed



const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>PANDIT MISTHAN BHANDAR</div>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/Updates">UPDATES</Link></li>
                    <li><Link href="/about">ABOUT US</Link></li>
                    <li><Link href="/sweets">SWEETS</Link></li>
                    <li><Link href="/cart">CART</Link></li>
                    <li><Link href="/contact">CONTACT US</Link></li>
                    <li><Link href="https://www.justdial.com/Bareilly/Pandit-Misthan-Bhandar-Hardaspur/9999PX581-X581-170826000502-K7N1_BZDET">REVIEWS AND RATINGS</Link></li>
                    <li><Link href="/LoginPage">LOGIN</Link></li>
                    <li><Link href="/ChangePassword">CHANGE PASSWORD</Link></li>
                    <li><Link href="/SignUpPage">SIGN UP</Link></li>
                    <li><LogoutButton /></li>
                </ul>
            </nav>
            <div className={styles.menuIcon} onClick={toggleSidebar}>
                <AiOutlineMenu size={30} />
            </div>
            {sidebarOpen && <Sidebar onClose={toggleSidebar} />}
        </header>
    );
};

export default Header;
