import React from 'react'
import BuyProduct from '../components/razorpay/BuyProduct'
import BoxCount from '../components/BoxCount'


const page = () => {
  return (
    <div>
      <BoxCount />
      <BuyProduct />
    </div>
  )
}

export default page