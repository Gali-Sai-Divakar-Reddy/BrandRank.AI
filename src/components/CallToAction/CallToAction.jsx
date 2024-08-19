import React from 'react'
import { ArrowRight } from 'lucide-react'
import Meteors from './Meteors'

const CallToAction = () => {
  return (
    <div className='relative bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-hidden'>
      <Meteors number={10} />
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide'>Ready to See BrandRank.AI in Action?</h2>
            <p className='mt-5 text-center'>Get a personalized demo and explore how BrandRank.AI can enhance your brand's AI strategy.</p>
            <div className='flex gap-2 mt-10 justify-center'>
                <button className='px-6 py-3 bg-neutral-900 text-white rounded'>Contact Us</button>
                <button className='inline-flex items-center justify-center px-6 py-3 rounded'>
                  Request Pricing
                  <ArrowRight className='ml-2 text-sm'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CallToAction