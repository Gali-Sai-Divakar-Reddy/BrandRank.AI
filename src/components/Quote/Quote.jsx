import React from 'react'
import peteBlackShaw from '../../assets/peteBlackshaw.png';


const Quote = () => {
  return (
    <section className='bg-[#001E80]/80 p-10'>
        <div className='max-w-7xl mx-auto'>
            <figure className="max-w-screen-md mx-auto text-center m-10">
                <svg className="w-10 h-10 mx-auto mb-3 text-slate-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-slate-200 ">"Brands that move with purpose towards Generative AI Answer Engines now will have a considerable advantage over those who wait on the sidelines."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src={peteBlackShaw} alt="profile picture"></img>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                        <cite className="pe-3 font-medium text-slate-200">Pete BlackShaw</cite>
                        <cite className="ps-3 text-sm text-slate-200 ">CEO at BrandRank.AI</cite>
                    </div>
                </figcaption>
            </figure>
        </div>
        
    </section>
  )
}

export default Quote