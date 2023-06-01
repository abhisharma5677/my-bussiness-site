import Link from 'next/link'
import Image from 'next/image';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import style from "@/app/styles/homePage.module.css"


const HomePageContactInfo = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
      <div className={style.homePageContact_class}>
        <p><u>GET THE LOCATION :-</u> <Link href="https://www.google.com/maps/place/Pandit+Misthan+Bhandar/@28.3944699,79.0856902,17z/data=!3m1!4b1!4m6!3m5!1s0x390ab73fc87e984f:0xf3602bc43f44d2c8!8m2!3d28.3944699!4d79.0882651!16s%2Fg%2F11byvkvw9h?entry=ttu" className={style.homeIcon_class}><MdLocationOn size={50} /></Link></p>
        <p><u>Email :-</u> <Link href="mailto:imabhishek5677@gmail.com" className={style.homeIcon_class}><MdEmail size={50} /></Link></p>
        <p><u>Phone :-</u> <Link href="tel:8384895512" className={style.homeIcon_class}> <GiRotaryPhone size={50} /> </Link> </p>
        <p><u>WhatsApp :-</u> <Link href="https://wa.me/918384895512" className={style.homeIcon_class}><FaWhatsappSquare size={50} /></Link> </p>
      </div>
    </div>
  )
}

export default HomePageContactInfo
