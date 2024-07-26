import React, { Suspense } from 'react'
import UploadPhotos from '../components/12_1_UploadPhotos'
import Loading from '../loading'


const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <UploadPhotos />
      </Suspense>
    </>
  )
}

export default page