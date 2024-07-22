import Image from "next/image"
import style from "@/app/styles/sweets.module.css"
import Link from "next/link"

const SweetCardTwo = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.sweet_container2}>
        {/* <Image src={props.img} alt="sweet-image" loading="lazy" width={200} height={200} className={style.sweet_image}></Image> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={style.sweet_detail}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <Link href={`/../../${props.id}`}>
              <button>BUY NOW</button>
            </Link>
          </div>
        </div>

        <div className={style.image_slider}>
          <Image src={props.img1} alt="Image 1" loading="lazy" width={200} height={200} className={style.img_common_class} />
          <Image src={props.img2} alt="Image 2" loading="lazy" width={200} height={200} className={style.img_common_class} />
          <Image src={props.img3} alt="Image 3" loading="lazy" width={200} height={200} className={style.img_common_class} />
          <Image src={props.img4} alt="Image 4" loading="lazy" width={200} height={200} className={style.img_common_class} />
        </div>
      </div>
    </div>
  )
}

export default SweetCardTwo