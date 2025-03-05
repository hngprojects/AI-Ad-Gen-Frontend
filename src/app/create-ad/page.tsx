// import SvgIcon from '@/components/icons/svg-icon'
// import React from 'react'


// const page = () => {
//   return (
//     <div>
//       <div className="bg-white flex flex-row justify-center items-center px-8 py-24">
//         {/* <div className='flex items-start pr-[54px] pb-[6px]'> */}
//         <div className="flex flex-col max-[600px]:flex-col md:flex-row items-start pr-[54px] pb-[6px]">
//           <div>
//             <img src="/images/image.svg" alt="image" />
//           </div>

//           <div className='w-[600px] flex flex-col gap-5'>
//             <h3 className='px-6 py-2 flex-col rounded-lg bg-[#E8F1FB] w-fit'>
//               <p className='text-blue-500'>SMARTER ADS, HIGHER ENGAGEMENTS</p>
//             </h3>

//             <h1 className='font-medium'>
//               <p className="text-[#0F172A] font-manrope text-4xl">Create, Customize and Publish <span className='text-[#B800B8]'>AI-Generated Ads</span> in Minutes</p>
//             </h1>

//             <h5 className='flex items-center gap-4'>
//               <SvgIcon />
//               <p className='text-[#5F5F5F] font-manrope'>Create compelling ads without hiring a team</p>
//             </h5>
//             <h5 className='flex items-center gap-4'>
//               <SvgIcon />
//               <p className='text-[#5F5F5F] font-manrope'>Generate region-speciific ads effortlessly</p>
//             </h5>
//             <h5 className='flex items-center gap-4'>
//               <SvgIcon />
//               <p className='text-[#5F5F5F] font-manrope'>Launch professional ads at affordable prices</p>
//             </h5>
//             <h5 className='flex items-center gap-4'>
//               <SvgIcon />
//               <p className='text-[#5F5F5F] font-manrope'>Optimize your Ads for sales and engagementts</p>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page

// import SvgIcon from '@/components/icons/svg-icon'
// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       <div className="bg-white flex flex-row justify-center items-center px-8 py-24">
//         <div className="flex flex-row flex-wrap md:flex-row max-[600px]:flex-col items-start pr-[54px] pb-[6px]">
//           <div>
//             <img src="/images/image.svg" alt="image" className="w-full h-auto object-contain" />
//           </div>

//           <div className="w-full max-w-[600px] flex flex-col gap-5">
//             <h3 className="px-6 py-2 rounded-lg bg-[#E8F1FB] w-fit">
//               <p className="text-blue-500">SMARTER ADS, HIGHER ENGAGEMENTS</p>
//             </h3>

//             <h1 className="font-medium">
//               <p className="text-[#0F172A] font-manrope text-4xl">
//                 Create, Customize and Publish <span className="text-[#B800B8]">AI-Generated Ads</span> in Minutes
//               </p>
//             </h1>

//             {["Create compelling ads without hiring a team", "Generate region-specific ads effortlessly", 
//               "Launch professional ads at affordable prices", "Optimize your Ads for sales and engagements"]
//               .map((text, index) => (
//                 <h5 key={index} className="flex items-center gap-4">
//                   <SvgIcon />
//                   <p className="text-[#5F5F5F] font-manrope">{text}</p>
//                 </h5>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page;

import SvgIcon from '@/components/icons/svg-icon'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="bg-white flex justify-center items-center px-8 py-6">
        {/* Responsive container */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img src="/images/image.svg" alt="image" className="w-full h-auto object-contain" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 max-w-[600px] flex flex-col gap-5">
            <h3 className="px-6 py-2 rounded-lg bg-[#E8F1FB] w-fit">
              <p className="text-blue-500">SMARTER ADS, HIGHER ENGAGEMENTS</p>
            </h3>

            <h1 className="font-medium text-[#0F172A] font-manrope text-4xl">
              Create, Customize and Publish <span className="text-[#B800B8]">AI-Generated Ads</span> in Minutes
            </h1>

            {/* Feature List */}
            {[
              "Create compelling ads without hiring a team",
              "Generate region-specific ads effortlessly",
              "Launch professional ads at affordable prices",
              "Optimize your Ads for sales and engagements"
            ].map((text, index) => (
              <h5 key={index} className="flex items-start gap-4">
                <SvgIcon />
                <p className="text-[#5F5F5F] font-manrope">{text}</p>
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
