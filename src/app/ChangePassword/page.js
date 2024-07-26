import React from 'react'
import ChangePassword from '../components/22ChangePassword'
import Loading from '../loading'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ChangePassword />
    </Suspense>
  )
}

export default page