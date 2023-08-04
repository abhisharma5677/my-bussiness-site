import sweets from "../components/sweetObject"
import SweetCard from "./SweetCard"
import style from "@/app/styles/sweets.module.css"

const SweetDescription = () => {
  return (
    <div>
      <div>
        <h1 className={style.sweet_msg}>About Sweets</h1>
      </div>
      <div className={style.borderSweets}>
        <div className={style.sweetCard_flex}>
          {sweets.map((item, i) => {
            return (
              <SweetCard key={i}
                img1={sweets[i].Img1}
                img2={sweets[i].Img2}
                img3={sweets[i].Img3}
                img4={sweets[i].Img4}
                name={sweets[i].name}
                description={sweets[i].meaning} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SweetDescription
