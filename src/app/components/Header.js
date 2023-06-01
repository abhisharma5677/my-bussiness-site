import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"


const Header = () => {
    return (
        <header className={styles.header_class}>
            <div>
                <Link href="/">
                    <Image src="/owner.jpg" alt="owner-image" width={70} height={70} className={styles.image_class}/>
                </Link>
            </div>
            <Navbar />
        </header>
    )
}

export default Header