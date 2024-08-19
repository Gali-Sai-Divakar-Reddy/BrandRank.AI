import React, {useRef} from 'react'
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import HeroDotPattern from './HeroDotPattern'
import WordPullUp from './WordPullUp';
import { motion } from 'framer-motion';
import AnimatedShinyText from './AnimatedShinyText';

const Hero = () => {
    const wrapper = {
      hidden: {
        opacity:0
      },
      visible:{
        opacity:1,
        transition:{
          staggerChildren:0.125
        }
      }
    }

    const list = {
      hidden:{
        opacity:0, 
        x:-100
      },
      visible:{
          opacity:1,
          x:0,
          transition:{duration:0.5 , ease:[0.455, 0.03, 0.515, 0.955], delay:1}
      }
    }

    const container = {
      visible:{
        transition:{
          staggerChildren:0.025
        }
      }
    }
  return (
    <section id='home' className='relative bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]'>
       <HeroDotPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          )}
        />
      <div className='max-w-7xl mx-auto h-[70vh] flex flex-col justify-center items-center z-10'>
        
        <div className="flex flex-col  justify-center items-center mt-6 lg:mt-20 z-20">
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}
            className={cn(
              "group rounded-full border border-white/5 bg-[#EAEEFE] text-base text-white transition-all ease-in hover:cursor-pointer hover:hover:bg-neutral-800 z-10",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
              <span>✨ Introducing BrandRank.AI</span>
              {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
            </AnimatedShinyText>
          </motion.div>
          <WordPullUp
            className="text-4xl sm:ml-2 sm:text-6xl lg:text-7xl text-center tracking-wide mt-10"
            words="Uncover the Truth Behind AI Answer Engines."
          />
          <motion.div initial="hidden" animate="visible" variants={wrapper}>
            <motion.p variants={list} className="mt-10 text-lg text-center max-w-4xl">
                Empowering Brand Leaders with Actionable Insights in the Answer Economy
            </motion.p>
          </motion.div>
          
          <div className='flex gap-1 items-center my-8'>
              <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:1.5}} className="px-6 py-3 bg-neutral-900 text-white rounded-lg">
                  Get Started
              </motion.button>
              <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:1.5}} className="inline-flex items-center justify-center px-6 py-3 rounded-lg">
                  learn More
                  <ArrowRight className='ml-2 text-sm'/>
              </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero