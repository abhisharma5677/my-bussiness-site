import React from 'react'
// import BuyProduct from '../components/razorpay/BuyProduct'
import BoxCount from '../components/BoxCount'
import Image from 'next/image'


const page = () => {
  return (
    <div>
      <BoxCount />
      <div style={{display:"flex" , justifyContent:"center"}}>
        <div className='QR'>
          <h1>SCAN THE QR</h1>
          <Image src='/QR.jpeg' alt="QR CODE" height={400} width={200} className='QR_image' />
        </div>
      </div>
    </div>
  )
}

export default page