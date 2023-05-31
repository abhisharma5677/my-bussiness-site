import style from "@/app/styles/homePage.module.css"
import HomeSweetCard from "./HomeSweetCard"
import sweets from "../components/sweetObject"

const HomePageSweets = () => {
  return (
    <div>
      <div className={style.message_container}>
        <div className={style.message}>पंडित मिष्ठान भंडार आपका हार्दिक स्वागत करता है।</div>
        <div className={style.message}>PANDIT JII SWEETS WELCOMES YOU</div>
        <div className={style.message}>SERVING SINCE 50 YEARS....</div>
        <div className={style.message}>अतिथि देवो भव</div>
        <div className={style.message}>HAVE THE DELICIOUS TASTE OF PURE SWEETS....</div>
      </div>

      <div style={{display:"flex" , justifyContent:"center"}}>
        <div className={style.homeImagesContainer}>
          {sweets.map((item, i) => {
            return (
              <HomeSweetCard key={i} img={sweets[i].Img6} />
            )
          })}

          {sweets.map((item, i) => {
            return (
              <HomeSweetCard key ={i} img={sweets[i].Img7} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default HomePageSweets

