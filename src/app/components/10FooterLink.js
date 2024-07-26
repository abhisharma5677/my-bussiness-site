import style from "@/app/styles/footer.module.css"
import Link from 'next/link'
import LoginContext from "../context/LoginContext"
import { useContext } from "react"

const FooterLink = () => {

    const { login } = useContext(LoginContext);


    return (
        <div>
            <h3 style={{ textDecoration: "underline", color: "grey",fontFamily:"'Times New Roman', Times, serif" }}>Quick Links</h3>
            <div>
                <ul className={style.quickLink_class}>
                    <li>
                        <Link href="/" className={style.listItem_class}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/Updates" className={style.listItem_class}>
                            UPDATES
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={style.listItem_class}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link href="/sweets" className={style.listItem_class}>
                            SWEETS
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart" className={style.listItem_class}>
                            CART
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={style.listItem_class}>
                            CONTACT US
                        </Link>
                    </li>
                    <li className={style.listItem_class}>
                        <Link href="https://www.justdial.com/Bareilly/Pandit-Misthan-Bhandar-Hardaspur/9999PX581-X581-170826000502-K7N1_BZDET" className={style.listItem_class}>
                            REVIEWS AND RATINGS
                        </Link>
                    </li>
                    <li className={style.listItem_class}>
                        <Link href="/LoginPage" className={style.listItem_class}>
                            LOGIN
                        </Link>
                    </li>
                    <li className={style.listItem_class}>
                        <Link href="/ChangePassword" className={style.listItem_class}>
                            CHANGE PASSWORD
                        </Link>
                    </li>
                    <li className={style.listItem_class}>
                        <Link href="/SignUpPage" className={style.listItem_class}>
                            SIGN UP
                        </Link>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLink