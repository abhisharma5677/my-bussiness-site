import style from "@/app/styles/homePage.module.css"
import Image from "next/image"

const HomeSweetCard = (props) => {
    return (
        <div>
            <Image src={props.img} alt="sweet_image" loading="lazy" height={500} width={600} className={style.image_home}/> 
        </div>
    )
}

export default HomeSweetCard