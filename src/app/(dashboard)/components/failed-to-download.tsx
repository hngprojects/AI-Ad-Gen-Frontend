import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import React from 'react'

const FailedToDownload = ({handleRetry} : {handleRetry: () => void}) => {
  return (

    <div className="max-w-[609px] w-full mx-auto flex items-center justify-center max-h-[648px] rounded-sm">
    <div className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center">
      <h2 className="text-lg md:text-2xl text-[#121316] text-center leading-8 font-semibold max-md:max-w-[338px]">
        Failed to Generate Image
      </h2>
      <Button
        onClick={handleRetry}
        className="bg-[#B800B8] hover:bg-[#960096] w-fit mx-auto text-white px-6 py-5 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm md:text-base leading-6 font-normal"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>
    </div>
  </div>
  )
}

export default FailedToDownload