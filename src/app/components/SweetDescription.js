import sweets from "../components/sweetObject"
import SweetCardOne from "./SweetCardOne"
import SweetCardTwo from "./SweetCardTwo"
import style from "@/app/styles/sweets.module.css"

const SweetDescription = () => {
  return (
    <div>
      <div>
        <h1 className={style.sweet_msg}>Dessert Insights</h1>
      </div>
      <div className={style.borderSweets}>
        {sweets.map((item, i) => {
          if (i % 2 === 0) {
            return (
              <div key={i} className={style.sweetCard_flex1}>
                <SweetCardOne
                  img1={sweets[i].Img1}
                  img2={sweets[i].Img2}
                  img3={sweets[i].Img3}
                  img4={sweets[i].Img4}
                  name={sweets[i].name}
                  description={sweets[i].meaning}
                 />
              </div>
            )
          }
          else {
            return (
              <div key={i} className={style.sweetCard_flex2}>
                <SweetCardTwo
                  img1={sweets[i].Img1}
                  img2={sweets[i].Img2}
                  img3={sweets[i].Img3}
                  img4={sweets[i].Img4}
                  name={sweets[i].name}
                  description={sweets[i].meaning} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default SweetDescription
