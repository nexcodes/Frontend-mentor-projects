import React from 'react'

const Body = () => {
  return (
    <>
    <picture>
        <source media="(max-width: 768px)" srcSet='/images/image-hero-mobile.png'/>
      <img className='md:my-2 md:h-[80vh] md:absolute md:right-16' src="/images/image-hero-desktop.png" alt="" />
    </picture>
    <h1 className='text-center text-4xl md:text-7xl font font-bold text-black my-4 md:w-1/2 md:text-left md:ml-24 md:mr-auto md:mt-40 md:mb-12'><span className='md:block'>Make</span> remote work</h1>
    <p className='text-center text-md md:text-lg font font-medium text-gray-500 my-4 md:w-1/3 md:text-left md:ml-24 md:mr-auto md:mb-8'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
    <div className='flex justify-center items-center md:justify-start md:mb-8'>
    <button className='bg-black border border-black hover:bg-white text-white hover:text-black duration-150 font font-bold px-4 py-3 md:ml-24 rounded-xl'>Learn More</button>
    </div>
    <div className='space-x-6 md:space-x-12 md:ml-24 mb-12 w-screen md:w-[70%] flex justify-center md:justify-start my-8'>
        <img className="w-16 h-6" src="/images/client-databiz.svg" alt="" />
        <img className="w-16 h-6" src="/images/client-audiophile.svg" alt="" />
        <img className="w-16 h-6" src="/images/client-meet.svg" alt="" />
        <img className="w-16 h-6" src="/images/client-maker.svg" alt="" />
    </div>
    </>
  )
}

export default Body
