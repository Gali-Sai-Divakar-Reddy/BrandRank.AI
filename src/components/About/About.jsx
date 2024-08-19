import React from 'react'
import ListItem from './ListItem'
// import BrandRankBusiness from '../../assets/BrandRankBusiness.png'
import BrandRankImage from '../../assets/BrandRankImage.jpg'

const About = () => {
  return (
    <section id='about' className='mt-20'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center'>
                <span className="bg-[#EAEEFE] text-[#001E80] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    About
                </span>
                <h2 className='text-3xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide'>Empowering Brand Leaders {" "}
                    <span className="bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                    in the AI-Driven Markets
                    </span>
                </h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center min-h[400px]'>
                <div>
                    <img src={BrandRankImage} alt="BrandRank" className='w-full md:w-[600px]'/>
                </div>
                <div className='mx-2 md:w-[500px]'>
                    <h5 className="mt-1 mb-6 text-2xl text-center">Navigating the Answer Economy</h5>
                    <ul className="space-y-3">
                        <ListItem text="Keep track of how your brand is represented across major Generative AI platforms." />
                        <ListItem text="Detect potential risks and areas where your brand may be exposed or misrepresented." />
                        <ListItem text="Receive clear, data-driven recommendations to improve brand perception and influence purchasing decisions." />
                        <ListItem text="Adapt to the shifting $200 billion search market where AI-driven answers can make or break a sale." />
                    </ul>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About