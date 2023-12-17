import React from 'react'
import style from '@/app/styles/homePage.module.css'

const BackgroundImage = () => {
  return (
    <div className={style.overlay}>
      <div className={style.backgroundImage}>
        <div>
          <h1>OVER 50 YEARS EXPERIENCE</h1>
          <h2>Welcome to the delicious world of Pandit Misthan Bhandar</h2>
          <p style={{ fontSize: "large", fontWeight: "bolder", color: "white" }}>We have over 45 years of experiance in the carfting of specialist Indian sweets and most perfect combination of flavour and texture.</p>
          <p style={{ fontSize: "large", fontWeight: "bolder", color: "white" }}>Choosing us is a reflection of impaccable taste and the most exquisite taste you will savour, We have achieved the rare distinction of being known as simply the best</p>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImage