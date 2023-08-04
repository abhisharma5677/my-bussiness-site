import React from 'react'
import style from "@/app/styles/homePage.module.css"
import Image from 'next/image'

const QualityAssurance = () => {
  return (
    <div className={style.QualityClass}>
        <h1>Quality Assurance</h1>
        <Image src="/fssai.avif" alt="fssai" loading="lazy" width={300} height={300} className={style.fssai} />
        <h1><u>FSSAI CERTIFIED</u></h1>
        <h3>Being a quality-oriented firm, we have been able to provide our prestigious customers with a quality assured range of Indian Sweets.</h3>
    </div>
  )
}

export default QualityAssurance