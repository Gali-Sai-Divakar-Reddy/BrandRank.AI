import React, {useRef} from 'react'
import { BackgroundCircles } from './HeroDesign';
import { ScrollParallax } from 'react-just-parallax';

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <div className=" relative h-[50vh] w-full flex flex-col justify-center items-center text-center px-4 pt-[52px] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-hidden">
        <BackgroundCircles parallaxRef={parallaxRef}/>
        <div className='container mx-auto z-10 px-4 flex flex-col justify-center items-center text-center overflow-hidden'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2 font-bold leading-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Uncover the Truth Behind AI Answer Engines.
            </h1>
            <p className="p-2 leading-relaxed">
                Empowering Brand Leaders with Actionable Insights in the Answer Economy
            </p>
            <div className='flex gap-1 items-center'>
                <button className="mt-4 px-6 py-3 bg-neutral-900 text-white rounded">
                    Get Started
                </button>
                <button className="mt-4 px-6 py-3  rounded">
                    learn More
                </button>
            </div>
        </div>
    </div>
    
    // <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]'>
    //     <div className='container mx-auto'>
    //         <div>
    //             <h1 className='text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 p-2'>Uncover the Truth Behind AI Answer Engines.</h1>
    //             <p className='text-xl text-[#010D3E] tracking-tight mt-6 p-2'>Empowering Brand Leaders with Actionable Insights in the Answer Economy</p>
    //             <div className='flex gap-1 items-center mt-[30px]'>
    //                 <button>Get Started</button>
    //                 <button>Learn More</button>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}

export default Hero