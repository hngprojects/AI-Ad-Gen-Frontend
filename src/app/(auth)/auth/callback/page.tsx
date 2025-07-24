import React, { Suspense } from 'react'
import AuthCallback from './auth-callback'
import Loader from '@/components/ui/loader'

const page = () => {
  return (
    <Suspense fallback={<div> <Loader/></div>}>
      <AuthCallback />
    </Suspense>
  )
}

export default page