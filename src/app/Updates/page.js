import React, { Suspense } from 'react'
import GetPhoto from '../components/GetPhoto'
import Loading from '../loading'


const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <GetPhoto />
      </Suspense>
    </div>
  )
}

export default page