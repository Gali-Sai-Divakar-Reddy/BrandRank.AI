import React from 'react'
import { navItems } from '../../constants/index.js'
import { motion } from 'framer-motion'

const NavbarItems = ({ menuDrawerOpen }) => {
    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const navItem = {
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        hidden: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        }
    };
  return (
    <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
    >
        {navItems.map((item, index) => (
            <motion.li key={index} className='py-4' variants={navItem}>
                <a href={item.href}>{item.label}</a>
            </motion.li>
        ))}
    </motion.ul>
  )
}

export default NavbarItems