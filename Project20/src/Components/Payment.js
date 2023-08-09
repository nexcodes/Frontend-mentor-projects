import React from 'react'
import desktop from '../images/bg-main-desktop.png'
import mobile from '../images/bg-main-mobile.png'
import Front from '../images/bg-card-front.png'
import back from '../images/bg-card-back.png'
import cardlogo from '../images/card-logo.svg'
const Payment = () => {
  return (
    <>
    <picture>
        <source srcSet={mobile} media="(max-width: 768px)"/>
        <img className='absolute -z-10 top-0' src={desktop} alt="background" />    
    </picture> 
    <div className='relative'>
    <img className='w-72 ml-auto mr-6 mt-6 md:hidden ' src={back} alt="Card" />
    <div className='absolute top-24 left-4 md:relative'>
    <img className='w-72 md:ml-64' src={Front} alt="Card" />
    <img className='md:ml-64 absolute top-4 left-6 w-16' src={cardlogo} alt="Card" />
    <span className='md:ml-64 absolute bottom-12 left-6 text-white font-normal text-2xl'>0000 0000 0000 0000</span>
    <span className='md:ml-64 absolute bottom-6 left-6 text-gray-300 font-normal text-[0.6rem]'>JANE APPLESED</span>
    <span className='md:ml-64 absolute bottom-6 right-4 text-gray-300 font-normal text-[0.6rem]'>00/00</span>
    </div>
    <img className='w-72 mr-6 md:inline hidden' src={back} alt="Card" />
    </div>
    </>
  )
}

export default Payment
