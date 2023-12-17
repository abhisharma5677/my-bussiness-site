import style from "@/app/styles/homePage.module.css"
import HomeSweetCard from "./HomeSweetCard"
import sweets from "../components/sweetObject"
// import HomePageContactInfo from "./HomePageContactInfo"
import QualityAssurance from "./QualityAssurance"
import BackgroundImage from "./BackgroundImage"
import Link from "next/link"
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


const HomePageSweets = () => {
  return (
    <div>
      {/* Home Page Message Code */}
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


      {/* Home Page Sweets Code */}
      <div>
        <div className={style.homeImagesContainer}>
          <HomeSweetCard img={sweets[0].Img6} />
          <HomeSweetCard img={sweets[1].Img6} />
          <HomeSweetCard img={sweets[2].Img6} />
          <HomeSweetCard img={sweets[3].Img6} />
          <HomeSweetCard img={sweets[4].Img6} />
          <HomeSweetCard img={sweets[5].Img6} />
          <HomeSweetCard img={sweets[6].Img6} />
          <HomeSweetCard img={sweets[7].Img6} />
        </div>
      </div>


      {/* Home Page FSSAI Code */}
      <div className={style.main_page_flex}>
        <BackgroundImage />

        <QualityAssurance />
      </div>
      {/* <div className="whatsapp">
        <p><Link href="https://wa.me/918384895512"><FaWhatsappSquare size={40} color="white" /></Link> </p>
        <p><Link href="https://www.google.com/maps/place/Pandit+Misthan+Bhandar/@28.3944699,79.0856902,17z/data=!3m1!4b1!4m6!3m5!1s0x390ab73fc87e984f:0xf3602bc43f44d2c8!8m2!3d28.3944699!4d79.0882651!16s%2Fg%2F11byvkvw9h?entry=ttu"><MdLocationOn size={40} color="white" /></Link></p>
      </div> */}
    </div>
  )
}

export default HomePageSweets

