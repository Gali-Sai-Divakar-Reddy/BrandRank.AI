import React from 'react'
import { navItems } from '../../constants/Constatns'
import { socials } from '../../constants/Constatns'

const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
        <div className="max-w-7xl mx-auto">
            <div  className="text-xl tracking-tighter">
                BrandRank.AI
            </div>
            <ul className="flex flex-col md:flex-row md:justify-center justify-center gap-6 mt-6">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex justify-center gap-6 mt-6'>
                {socials.map((item, index) => (
                    <div key={index}>
                        <a href={item.href} target='_blank'>{item.icon}</a>
                    </div>
                ))}
            </div>
            <p className='mt-6'>© 2024 BrandRank.AI, Inc. All rights reserved.</p>
            
            </div>
    </footer>
  )
}

export default Footer