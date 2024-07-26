import React , {Suspense} from 'react'
import SignUp from '../components/21SignUp'
import Loading from '../loading';
// const SignUp = React.lazy(() => import('@/app/components/21SignUp'));


const page = () => {
  return (
    <Suspense fallback={<Loading />}>
        <SignUp />
    </Suspense>
  )
}

export default page