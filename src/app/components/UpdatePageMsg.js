import React from 'react'
import Link from 'next/link'


const UpdatePageMsg = () => {
  return (
    <div>
      <h1>UPDATES PAGE</h1>
      <p>Stay Updated Regarding <br></br> the Latest Deals at <br></br>Pandit Misthan Bhandar</p>
      <h3 style={{marginTop:"70px"}}><u>Quick Links</u></h3>
      <li style={{marginTop:"20px"}}>
        <Link href="/contact">
          CONTACT US
        </Link>
      </li>
      <li style={{marginTop:"10px"}}>
        <Link href="https://pandit-misthan-bhandar.business.site/">
          REVIEWS AND RATINGS
        </Link>
      </li>
    </div>
  )
}

export default UpdatePageMsg