import style from "@/app/styles/footer.module.css"
import FooterMsg from './FooterMsg'
import FooterLink from './FooterLink'
import FooterContact from './FooterContact'
import Image from "next/image"


const Footer = () => {
    return (
        <div className={style.footer_container}>
            <FooterMsg />
            <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logo} />
            <div className={style.linkIcon_class}>
                <FooterLink />
                <FooterContact />
            </div>
        </div>
    )
}

export default Footer