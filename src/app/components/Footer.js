import style from "@/app/styles/footer.module.css"
import FooterMsg from './FooterMsg'
import FooterLink from './FooterLink'
import FooterContact from './FooterContact'

const Footer = () => {
    return (
        <div className={style.footer_container}>
            <FooterMsg />
            <div className={style.linkIcon_class}>
                <FooterLink />
                <FooterContact />
            </div>
        </div>
    )
}

export default Footer