import style from "@/app/styles/aboutAnimation.module.css"

const AboutAnimation = () => {
    return (
        <div className={style.pre_container}>
            <div style={{ lineHeight: "5px", color: "rgb(113, 112, 112)", fontWeight: "bolder" }}>
                <h2>PANDITJI MISTHAN BHANDAR </h2>
                <h3>पंडित जी मिष्ठान भंडार</h3>
            </div>

            <div className={style.message_container}>
                <span className={style.message}><h1>अतिथि देवो भव</h1></span>
                <span className={style.message}><h1>WELCOME</h1></span>
                <span className={style.message}><h1>जय श्री राधे कृष्णा</h1></span>
                <span className={style.message}><h3>Serving Delicious Taste</h3></span>
                <span className={style.message}> <h1>जय दाऊजी महाराज</h1> </span>
            </div>


            <h2 className={style.serving_msg}>Serving the Lagacy of past 50 years</h2>
        </div>
    )
}

export default AboutAnimation


