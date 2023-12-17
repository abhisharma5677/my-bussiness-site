import React, { Suspense } from 'react'
import GetPhoto from '../components/GetPhoto'
import UpdatePageMsg from '../components/UpdatePageMsg'
import Loading from '../loading'


const page = () => {
  return (
    <div className="update_page_flex">
      <Suspense fallback={<Loading />}>
        <div className="update_page_msg">
          <UpdatePageMsg />
        </div>
        <div className="update_page_photos">
          <GetPhoto />
        </div>
      </Suspense>
    </div>
  )
}

export default page