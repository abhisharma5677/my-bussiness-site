import Link from "next/link"
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { BsFacebook , BsInstagram } from "react-icons/bs";

const FooterContact = () => {
  return (
    <div>
        <div>
        <p><Link href="https://www.google.com/maps/place/Pandit+Misthan+Bhandar/@28.3944699,79.0856902,17z/data=!3m1!4b1!4m6!3m5!1s0x390ab73fc87e984f:0xf3602bc43f44d2c8!8m2!3d28.3944699!4d79.0882651!16s%2Fg%2F11byvkvw9h?entry=ttu" style={{color:"aqua"}}><MdLocationOn size={50} /></Link></p>
        <p><Link href="mailto:imabhishek5677@gmail.com" style={{color:"aqua"}}><MdEmail size={50} /></Link></p>
        <p><Link href="tel:8384895512" style={{color:"aqua"}}> <GiRotaryPhone size={50} /> </Link> </p>
        <p><Link href="https://wa.me/918384895512" style={{color:"aqua"}}><FaWhatsappSquare size={50} /></Link> </p>
        <p><Link href="https://www.facebook.com/panditjimithaiwale/" style={{color:"aqua"}}><BsFacebook size={50} /></Link> </p>
      </div>
    </div>
  )

}

export default FooterContact