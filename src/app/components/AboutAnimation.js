import style from "@/app/styles/aboutAnimation.module.css"

const AboutAnimation = () => {
    return (
        <div className={style.pre_container}>
            <div style={{lineHeight : "5px",color:"aliceblue", fontWeight:"bolder"}}>
                <h2>PANDIT MISTHAN BHANDAR</h2>
                <h3>पंडित जी की प्रसिद्ध मिठाई</h3>
            </div>

            <div class={style.message_container}>
                <span class={style.message}> <h1>जय दाऊजी महाराज</h1> </span>
                <span class={style.message}><h1>जय श्री राधे कृष्णा</h1></span>
            </div>


            <h2 className={style.serving_msg}>पिछले 50 वर्षों से आपकी सेवा में</h2>
        </div>
    )
}

export default AboutAnimation 
