import style from "@/app/styles/homePage.module.css"
import HomeSweetCard from "./HomeSweetCard"
import sweets from "../components/sweetObject"
// import HomePageContactInfo from "./HomePageContactInfo"
import QualityAssurance from "./QualityAssurance"
import BackgroundImage from "./BackgroundImage"
import Link from "next/link"
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationOn} from "react-icons/md";


const HomePageSweets = () => {
  return (
    <div>
      <div className={style.completeHomePage}>
        <div className={style.emptyDiv}></div>
        <div className={style.message_container}>
          <div className={style.message}>पंडित मिष्ठान भंडार आपका हार्दिक स्वागत करता है।</div>
          <div className={style.message}>पंडित जी की प्रसिद्ध मिठाई</div>
          <div className={style.message}>पिछले 50 वर्षों से आपकी सेवा में...</div>
          <div className={style.message}>अतिथि देवो भव</div>
          <div className={style.message}>HAVE THE DELICIOUS TASTE OF PURE SWEETS....</div>
        </div>

        <div className={style.emptyDiv2}></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", border: "1px solid red", backgroundColor: "rgba(0,0,0,0.6)", border: "none" }}>
        <div className={style.homeImagesContainer}>
          {sweets.map((item, i) => {
            return (
              <HomeSweetCard key={i} img={sweets[i].Img6} />
            )
          })}
        </div>
      </div>
      <BackgroundImage />

      <QualityAssurance />

      <p><Link href="https://wa.me/918384895512" className="whatsapp"><FaWhatsappSquare size={40} /></Link> </p>
      <p><Link href="https://www.google.com/maps/place/Pandit+Misthan+Bhandar/@28.3944699,79.0856902,17z/data=!3m1!4b1!4m6!3m5!1s0x390ab73fc87e984f:0xf3602bc43f44d2c8!8m2!3d28.3944699!4d79.0882651!16s%2Fg%2F11byvkvw9h?entry=ttu" className="location"><MdLocationOn size={40} /></Link></p>

    </div>
  )
}

export default HomePageSweets

