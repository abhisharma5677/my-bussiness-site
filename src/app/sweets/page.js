import SweetDescription from '../components/14SweetDescription'
import Loading from '../loading'
import { Suspense } from 'react'
import React from 'react';
// const SweetDescription = React.lazy(() => import('@/app/components/14SweetDescription'));


const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SweetDescription />
      </Suspense>
    </>
  )
}

export default page