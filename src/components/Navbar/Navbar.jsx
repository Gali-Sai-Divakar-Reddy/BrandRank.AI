import React, { useState, useEffect } from 'react'
import NavbarItems from './NavbarItems.jsx'
import { navItems } from '../../constants/index.js'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, delay } from "framer-motion";

const Navbar = () => {
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [navbarBg, setNavbarBg] = useState('transparent');

    const toggleNavbar = () => {
        setMenuDrawerOpen(!menuDrawerOpen)
    }

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        if (currentScrollY > 50) {
            setNavbarBg('rgba(24, 62, 194, 0.85)'); // Background color when scrolled
        } else {
            setNavbarBg('transparent'); // Transparent background initially
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarContainer = {
        visible: {
            y: 0,     
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                duration: 0.5
            }
        },
        hidden: {
            y: 50,  
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                duration: 0.5
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
        <nav className={`fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg ${navbarBg}`}>
            <div className="container px-4 mx-auto relative text-sm flex justify-between items-center">
                <div className='overflow-hidden'>
                    <motion.div 
                        className="text-xl tracking-tighter"
                        initial="hidden"
                        animate="visible"
                        variants={navBarContainer}
                    >
                        BrandRank.AI
                    </motion.div>
                </div>
                <div className='overflow-hidden'>
                    <motion.div 
                        className="hidden lg:flex items-center space-x-12"
                        initial="hidden" 
                        animate="visible" 
                        variants={navBarContainer}
                    >
                        <ul className="flex space-x-12">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        
                    </motion.div>
                </div>
                <div className='overflow-hidden'>
                    <motion.button 
                    className="hidden lg:block px-6 py-3 bg-neutral-900 text-white rounded"
                    initial="hidden" 
                    animate="visible" 
                    variants={navBarContainer}
                    >
                        Contact us
                    </motion.button>
                </div>
                
                <div className="lg:hidden flex">
                    <button onClick={toggleNavbar}>
                        {menuDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuDrawerOpen && (
                    <motion.div
                        className="fixed right-0 z-20 bg-gray-200 w-full p-12 flex flex-col justify-center items-center lg:hidden"
                        initial="hidden"
                        animate={menuDrawerOpen ? 'visible' : 'hidden'}
                        exit="hidden"
                        variants={navContainer}
                    >
                        <NavbarItems menuDrawerOpen={menuDrawerOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
  )
}

export default Navbar