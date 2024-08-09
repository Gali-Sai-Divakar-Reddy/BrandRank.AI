import React, { useState } from 'react'
import NavbarItems from './NavbarItems.jsx'
import { navItems } from '../../constants/index.js'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, delay } from "framer-motion";

const Navbar = () => {
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMenuDrawerOpen(!menuDrawerOpen)
    }

    const navBarContainer = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                duration: 0.3
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                duration: 0.3
            }
        }
    }

    const navContainer = {
        visible: {
          //x: 0,
          opacity: 1,
          transition: {
            x: { velocity: 100 },
            duration: 0.3
          }
        },
        hidden: {
          //x: -250,
          opacity: 0,
          transition: {
            x: { velocity: 100 },
            duration: 0.3
          }
        }
    };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='overflow-hidden'>
                    <motion.div 
                    className='text-xl tracking-tighter will-change-transform will-change-opacity'
                    initial="hidden"
                    animate="visible"
                    // transition={{duration:0.3}}
                    variants={navBarContainer}
                    >
                        BrandRank.AI
                    </motion.div>
                </div>
                
                <div className='overflow-hidden'>
                    <motion.div 
                    className='will-change-transform will-change-opacity' 
                    initial="hidden" animate="visible" 
                    variants={navBarContainer}>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {
                            navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                    </motion.div>
                </div>
                
                
                
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {menuDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {menuDrawerOpen && (
                    <motion.div className='fixed right-0 z-20 bg-gray-200 w-full p-12 flex flex-col justify-center items-center lg:hidden'
                    initial="hidden"
                    animate={menuDrawerOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                    >
                        <NavbarItems menuDrawerOpen={menuDrawerOpen}/>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    </nav>
  )
}

export default Navbar