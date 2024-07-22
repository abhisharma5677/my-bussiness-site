import style from "@/app/styles/homePage.module.css"
import HomeSweetCard from "./05HomeSweetCard"
import sweets from "./01sweetObject"
// import HomePageContactInfo from "./HomePageContactInfo"
import QualityAssurance from "./07QualityAssurance"
import BackgroundImage from "./06BackgroundImage"
import Image from "next/image"
import Link from "next/link"
import AboutAnimation from './02AboutAnimation'

const HomePageSweets = () => {
  return (
    <div>
      <AboutAnimation />


      {/* Home Page Message Code */}
      {/* <div className={style.completeHomePage}>
        <div className={style.emptyDiv}></div>
        <div className={style.message_container}>
          <div className={style.message}>PANDIT JII MISTHAN BHANDAR WELCOMES YOU</div>
          <div className={style.message}>पंडित जी की प्रसिद्ध मिठाई</div>
          <div className={style.message}>Serving the Lagacy of past 50 years</div>
          <div className={style.message}>अतिथि देवो भव</div>
        </div>

        <div className={style.emptyDiv2}></div>
      </div>  */}



      {/* Home Page Sweets Code */}
      <div>
        <div className={style.homeImagesContainer}>
          {/* MILK CAKE */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[1].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>MILK CAKE</u></p>
                <p>Indian Milk Cake is a traditional Indian milk...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* PEDE */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[0].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>PEDE</u></p>
                <p>Pera is a mithai from the Indian subcontinent...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* KAJU KATLI */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[2].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>KAJU KATLI</u></p>
                <p>Kaju Katli is a delicious traditional North Indian sweet...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* BARFI */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[3].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>BARFI</u></p>
                <p>Burfi is a popular Indian milk based sweet recipe...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* BOONDI LADDOO */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[4].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>BOONDI LADDOO</u></p>
                <p>Laddu or laddoo is a spherical sweet from the Indian...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* GAJAR KA HALWA */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[5].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>GAJAR KA HALWA</u></p>
                <p>Gajar ka halwa, also known as gajorer halua...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* SOAN PAPDI */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[6].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>SOAN PAPDI</u></p>
                <p>It is a wonderful Indian dessert...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* MEWA BAATI */}
          <div className={style.container}>
            <HomeSweetCard img={sweets[7].Img6} />
            <div className={style.overlay}>
              <div className={style.text}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src="/LOGO.png" alt="logo_image" loading="lazy" height={100} width={100} className={style.logoHover} />
                </div>
                <p style={{ fontWeight: "bolder" }}><u>MEWA BATI</u></p>
                <p>Mawa bati is a popular dessert from Madhya Pradesh...
                  <Link href="/sweets" className={style.linkHover}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Home Page FSSAI Code */}
      <div className={style.main_page_flex}>
        <BackgroundImage />

        <QualityAssurance />
      </div>
      {/* <div className="whatsapp">
        <p><Link href="https://wa.me/918384895512"><FaWhatsappSquare size={40} color="white" /></Link> </p>
        <p><Link href="https://www.google.com/maps/place/Pandit+Misthan+Bhandar/@28.3944699,79.0856902,17z/data=!3m1!4b1!4m6!3m5!1s0x390ab73fc87e984f:0xf3602bc43f44d2c8!8m2!3d28.3944699!4d79.0882651!16s%2Fg%2F11byvkvw9h?entry=ttu"><MdLocationOn size={40} color="white" /></Link></p>
      </div> */}
    </div>
  )
}

export default HomePageSweets

