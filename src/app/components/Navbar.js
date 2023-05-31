import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div>
            <ul className={styles.navbar_class}>
                <li className={styles.list_class}>
                    <Link href="/" className={styles.link_class}>
                        HOME
                    </Link>
                </li>
                <li className={styles.list_class}>
                    <Link href="/about" className={styles.link_class}>
                        ABOUT US
                    </Link>
                </li>
                <li className={styles.list_class}>
                    <Link href="/sweets" className={styles.link_class}>
                        SWEETS
                    </Link>
                </li>
                <li className={styles.list_class}>
                    <Link href="/contact" className={styles.link_class}>
                        CONTACT US
                    </Link>
                </li>
                <li className={styles.list_class}>
                    <Link href="https://g.co/kgs/fBNnuC" className={styles.link_class}>
                        REVIEWS AND RATINGS
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar