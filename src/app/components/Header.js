'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai';


const Header = () => {


    const[menu , setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu)
    }


    return (
        <header className="header_class">
            <div>
                <Link href="/">
                    <Image src="/LOGO.png" alt="owner_image" width={70} height={70} className="image_class" />
                </Link>
            </div>
            <div>
                <ul className={menu ? "phone_nav" : "navbar_class"} onClick={handleClick}>
                    <li className="list_class">
                        <Link href="/" className="link_class">
                            HOME
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/about" className="link_class">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="list_class">
                        <Link href="/fromOwnersDesk" className="link_class">
                            OWNERS MESSAGE
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
                </ul>
            </div>
            <div>
                <AiOutlineMenu size={30} className="menuBar_class" onClick={handleClick} />
            </div>

        </header>
    )
}

export default Header