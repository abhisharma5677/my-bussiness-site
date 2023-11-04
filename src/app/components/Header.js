'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai';
import LoginContext from '../context/LoginContext';
import { useContext } from 'react';


const Header = () => {

    const { login } = useContext(LoginContext);

    const[menu , setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu)
    }

    const menuIcon = menu ? <AiOutlineClose size={30} color="white" className="menuBar_class" onClick={handleClick} />
                       : <AiOutlineMenu size={30} color="white" className="menuBar_class" onClick={handleClick} />

    return (
        <header className="header_class">
            {/* <div>
                <Link href="/">
                    <Image src="/LOGO.png" alt="owner_image" width={70} height={70} className="image_class" />
                </Link>
            </div> */}
            <div style={{color:"white",fontSize:"20px"}}>
                {menuIcon}
            </div>
            <div>
                <div style={{color:"white",fontSize:"17px",marginTop:"25px",marginBottom:"25px",marginRight:"0px"}}>Pandit Misthan Bhandar</div>
            </div>
            <div>
                <ul className={menu ? "phone_nav" : "navbar_class"} onClick={handleClick}>
                    <li className="list_class">
                        <Link href="/" className="link_class">
                            HOME
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/Updates" className="link_class">
                            UPDATES
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/onlinePayments" className="link_class">
                            PAY ONLINE
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/fromOwnersDesk" className="link_class">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/sweets" className="link_class">
                            SWEETS
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/contact" className="link_class">
                            CONTACT US
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="https://pandit-misthan-bhandar.business.site/" className="link_class">
                            REVIEWS AND RATINGS
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/LoginPage" className="link_class">
                            LOGIN
                        </Link>
                    </li>
                    {login && (<li className="list_class">
                        <Link href="/CreatePost" className="link_class">
                            CREATE POST
                        </Link>
                    </li>)}
                    {login && (<li className="list_class">
                        <Link href="/SignUpPage" className="link_class">
                            SIGN UP
                        </Link>
                    </li>)}
                </ul>
            </div>
            {/* <div>
                {menuIcon}
            </div> */}

        </header>
    )
}

export default Header