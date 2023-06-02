import style from "@/app/styles/footer.module.css"
import Link from 'next/link'

const FooterLink = () => {
  return (
    <div>
        <h3 style={{ textDecoration:"underline" , color:"#d6884c"}}>Quick Links</h3>
        <div>
            <ul className={style.quickLink_class}>
                <li>
                    <Link href="/" className={style.listItem_class}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={style.listItem_class}>
                        ABOUT US
                    </Link>
                </li>
                <li>
                    <Link href="/fromOwnersDesk" className={style.listItem_class}>
                        OWNERS MESSAGE
                    </Link>
                </li>
                <li>
                    <Link href="/sweets" className={style.listItem_class}>
                        SWEETS
                    </Link>
                </li>
                <li>
                    <Link href="/qualityAssurance" className={style.listItem_class}>
                        QUALITY ASSURANCE
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={style.listItem_class}>
                        CONTACT US
                    </Link>
                </li>
                <li className={style.listItem_class}>
                    <Link href="https://pandit-misthan-bhandar.business.site/" className={style.listItem_class}>
                        REVIEWS AND RATINGS
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLink