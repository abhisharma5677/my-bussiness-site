import style from "@/app/styles/homePage.module.css"
import HomeSweetCard from "./HomeSweetCard"
import sweets from "../components/sweetObject"
// import HomePageContactInfo from "./HomePageContactInfo"
import QualityAssurance from "./QualityAssurance"
import BackgroundImage from "./BackgroundImage"
import Link from "next/link"
import { FaWhatsappSquare } from "react-icons/fa";

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

    </div>
  )
}

export default HomePageSweets

