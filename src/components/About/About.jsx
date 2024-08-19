import React from 'react'
import ListItem from './ListItem'


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
            
            <div className='md:flex lg:flex md:gap-10 lg:gap-5 justify-center items-center p-12 min-h-[400px]'>
                <div className='w-full md:w-1/2 lg:w-1/2'>
                    <img src="src/assets/reviews-concept-landing-page.png" alt="topSearch" className='w-full' />
                </div>
                
                <div className='w-full md:w-1/2 lg:w-1/2 mt-4'>
                    <h5 className="mt-1 mb-6 text-2xl">Navigating the Answer Economy</h5>
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