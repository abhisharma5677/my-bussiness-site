import React, {Suspense} from 'react'
import LoginPage from '../components/20LoginPage'
import Loading from '../loading'
// const LoginPage = React.lazy(() => import('@/app/components/20LoginPage'));


const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoginPage />
    </Suspense>
  )
}

export default page