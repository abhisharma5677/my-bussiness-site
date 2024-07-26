import React, { Suspense } from 'react'
import Loading from '../loading'
import CartPage from '../components/17CartPage'
// const CartPage = React.lazy(() => import('@/app/components/17CartPage'));


const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CartPage />
      </Suspense>
    </>
  )
}

export default page