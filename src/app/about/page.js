import React from 'react'
import Image from 'next/image'
import style from "@/app/styles/AboutUs.module.css"
import { Suspense } from 'react'
import Loading from '../loading'

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={style.about_us}>
          <Image src="/LOGO.png" alt='logo' height={200} width={200} className={style.about_us_logo} />
          <div className={style.about_us_content}><b>Pandit Misthan Bhandar</b>,
            the leading sweet house of <b>Hardaspur Aonla, Bareilly</b> was
            established in 1969 by Late Shri Bhola Nath ji with the motive of
            serving the customers of Bareilly with premium quality sweets and
            confectionary items. Although, the group started its operation with
            the famous shop located in Hardaspur Aonla Bareilly by the name of Hari
            Misthan Bhandar, but the name got prominence with the opening of Pandit
            Misthan Bhandar outlet and market at Hardaspur Aonla, Bareilly.
            The items of high demand at Pandit Misthan Bhandar includes <b>Traditional Indian Sweets,
              Pede, Milk Cake , Barfi , Katli , Boondi Laddoo</b> which are in great demand by people from
            various parts of the country and abroad<b>.</b></div>
        </div>
      </div>
    </Suspense>
  )
}

export default page