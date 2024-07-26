import style from "@/app/styles/aboutAnimation.module.css"

const AboutAnimation = () => {
    return (
        <div className={style.pre_container}>
            <div className={style.panditjiMsg}>
                <h3 style={{fontFamily:"'Times New Roman', Times, serif"}}>PANDITJI MISTHAN BHANDAR </h3>
                <h3>पंडित जी मिष्ठान भंडार</h3>
            </div>

            <div className={style.message_container}>
                <span className={style.message}><h2>अतिथि देवो भव</h2></span>
                <span className={style.message}><h2 style={{fontFamily:"'Times New Roman', Times, serif"}}>WELCOME</h2></span>
                <span className={style.message}><h2>जय श्री राधे कृष्णा</h2></span>
                <span className={style.message}><h2 style={{fontFamily:"'Times New Roman', Times, serif"}}>Serving Delicious Taste</h2></span>
                <span className={style.message}> <h2>जय दाऊजी महाराज</h2> </span>
            </div>


            <h2 className={style.serving_msg}>Serving the Lagacy of past 50 years</h2>
        </div>
    )
}

export default AboutAnimation


