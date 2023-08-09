import React from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'
import cross from '../assets/images/icon-menu-close.svg'

const Navbar = () => {
  let side = React.createRef()
  const sidebar = () => {
    side.current.classList.toggle("hidden")
  }
  return (
    <>
    <div className="flex justify-between md:max-w-[72rem] md:mx-auto md:w-11/12 my-12 mx-8 font">
      <img src={logo} alt="logo" />
      <button onClick={sidebar}>
      <img className='md:hidden' src={hamburger} alt="hamburger" />
      </button>
      {/* For mobile */}
      <div ref={side} className='bg-[#c5c6ce] w-4/6 md:hidden absolute top-0 right-0 bottom-0 items-center hidden'>
      <img onClick={sidebar} className='md:hidden absolute top-12 right-4' src={cross} alt="hamburger" />
      <ul className="text-[#5d5f79] mx-4 my-40 space-y-4">
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Home</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>New</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Popular</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Trending</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Categories</li>
        </ul>
      </div>
      {/* For desktop */}
        <ul className="space-x-6 text-[#5d5f79] hidden md:flex ">
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Home</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>New</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Popular</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Trending</li>
            <li className='cursor-pointer hover:text-[#f15e50] duration-150'>Categories</li>
        </ul></div>
    </>
  )
}

export default Navbar
