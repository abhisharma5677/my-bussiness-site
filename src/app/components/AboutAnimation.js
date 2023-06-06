import style from "@/app/styles/aboutAnimation.module.css"

const AboutAnimation = () => {
    return (
        <div className={style.pre_container}>
            <div style={{lineHeight : "2px",color:"white"}}>
                <h2>PANDIT MISTHAN BHANDAR</h2>
                <h3>PANDIT JII SWEETS</h3>
            </div>

            <div class={style.message_container}>
                <span class={style.message}> <h1>जय दाऊजी महाराज</h1> </span>
                <span class={style.message}><h1>जय श्री राधे कृष्णा</h1></span>
            </div>


            <h2 className={style.serving_msg}>Serving the lagacy of past 50 years</h2>
        </div>
    )
}

export default AboutAnimation 
