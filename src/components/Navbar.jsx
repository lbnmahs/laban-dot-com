import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('');
  const [show, setShow] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-5xl mx-auto'>

        <Link
          to="/"
          className='flex items-center gap-2' 
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-24 h-24 object-fill' /> */}
          <p className='text-white text-[30px] font-bold italic cursor-pointer'>LBNMAHS</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[20px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        {/* Mobile NavBar */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={show ? close : menu}
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick = {() => setShow(!show)}
          />
          <div className={`${!show ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 flex flex-col justify-center items-center right-0 w-full z-10 rounded-xl`}>
            <ul className='list-none flex justify-center items-center flex-col gap-4'>
              {
                navLinks.map((link) => (
                  <li 
                    key={link.id} 
                    className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[20px] font-poppins font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title)
                      setShow(!show)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar