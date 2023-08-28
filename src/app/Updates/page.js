import React from 'react'
import GetPhoto from '../components/GetPhoto'
import UploadPhotos from '../components/UploadPhotos';


const page = () => {
  return (
    <div>
      <UploadPhotos />
      <GetPhoto />
    </div>
  )
}

export default page