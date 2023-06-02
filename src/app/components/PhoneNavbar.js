'use client'

import { AiOutlineMenu } from 'react-icons/ai';
import style from "@/app/styles/navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const PhoneNavbar = () => {

    const[menu , setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu)
    }

    return (
        <div className={style.phone_nav}>
            <Link href="/">
                <Image src="/owner.jpg" alt="owner-image" width={70} height={70} className={style.image_class} />
            </Link>
            {/* {if(menu === 1){ */}
                <AiOutlineMenu size={40} className={style.menuBar_class} onClick={handleClick} />
            {/* }else{
                <AiOutlineMenu size={40} className={style.menuBar_class} onClick={handleClick} />
            }} */}
        </div>
    )
}

export default PhoneNavbar