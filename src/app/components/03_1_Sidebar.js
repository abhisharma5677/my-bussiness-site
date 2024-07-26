import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import styles from "@/app/styles/Sidebar.module.css";
import LogoutButton from './23LogoutButton'; // Adjust the import path as needed



const Sidebar = ({ onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeIcon} onClick={onClose}>
                    <AiOutlineClose size={30} />
                </div>
                <nav>
                    <ul onClick={onClose}>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/Updates">UPDATES</Link></li>
                        <li><Link href="/about">ABOUT US</Link></li>
                        <li><Link href="/sweets">SWEETS</Link></li>
                        <li><Link href="/cart">CART</Link></li>
                        <li><Link href="/contact">CONTACT US</Link></li>
                        <li><Link href="https://pandit-misthan-bhandar.business.site/">REVIEWS AND RATINGS</Link></li>
                        <li><Link href="/LoginPage">LOGIN</Link></li>
                        <li><Link href="/ChangePassword">CHANGE PASSWORD</Link></li>
                        <li><Link href="/CreatePost">CREATE POST</Link></li>
                        <li><Link href="/SignUpPage">SIGN UP</Link></li>
                        <li><LogoutButton /></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
