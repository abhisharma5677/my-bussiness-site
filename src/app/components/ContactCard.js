import { GiRotaryPhone } from "react-icons/gi";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsFacebook , BsInstagram } from "react-icons/bs";
import Link from "next/link";
import style from "@/app/styles/contact.module.css"

const ContactCard = () => {
  return (
    <div className={style.card_container}>
        <div className={style.phone_class}>
            <GiRotaryPhone size={100} />
            <h3>PHONE</h3>
            <h3>(9458218246)</h3>
            <h3>(9760445550)</h3>
            <h3>(8384895512)</h3>
        </div>

        <div className={style.instagram_class}>
            <FaWhatsappSquare size={100} style={{paddingTop:"15px" , paddingBottom:"10px"}} />
            <h4>Contact us on WhatsApp</h4>
            <h4>(9458218246)</h4>
            <h4>(9760445550)</h4>
            <h4>(8384895512)</h4>
        </div>

        <div className={style.facebook_class}>
            <Link href="https://www.facebook.com/profile.php?id=100026995993747"><BsFacebook size={100} style={{paddingTop:"15px" , paddingBottom:"10px"}} /></Link>
            <h4>Contact us on Facebook</h4>
            <h4>Click on the icon</h4>
        </div>

        <div className={style.instagram_class}>
            <Link href="https://www.instagram.com/im.abhishek_sharma_/"><BsInstagram size={100} style={{paddingTop:"15px" , paddingBottom:"10px"}} /></Link>
            <h4>Contact us on Instagram</h4>
            <h4>Click on the icon</h4>
        </div>
    </div>
  )
}

export default ContactCard
