import React, { Suspense } from 'react'
import GetPhoto from '../components/12GetPhoto'
import UpdatePageMsg from '../components/13UpdatePageMsg'
import Loading from '../loading'
import style from "@/app/styles/getPhoto.module.css"




const page = () => {
  return (
    <div className={style.update_page_flex}>
      <Suspense fallback={<Loading />}>
        <div className={style.update_page_msg}>
          <UpdatePageMsg />
        </div>
        <div className={style.flex_class}>
          <div className={style.update_page_photos}>
            <GetPhoto />
          </div>
        </div>
      </Suspense >
    </div >
  )
}

export default page