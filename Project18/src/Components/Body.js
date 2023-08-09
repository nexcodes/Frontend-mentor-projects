import React from 'react'
import desktop from '../assets/images/image-web-3-desktop.jpg'
import mobile from '../assets/images/image-web-3-mobile.jpg'

const Body = () => {
  return (
    <>
    <section className='md:max-w-[72rem] w-11/12 mx-auto flex flex-col md:flex-row'>
      <div className='md:w-[60%]'>
      <picture>
        <source media="(max-width: 768px)" srcSet={mobile} />
        <img src={desktop} alt="bb" />
      </picture>
      <div className='lg:flex md:justify-between'>
      <h1 className='font1 my-4 font-bold text-4xl mr-20'>The Bright Future of Web 3.0?</h1>
      <div className='md:flex-col'>
      <p className='text-[#5d5f79] font text-md md:my-4'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
      <button className='bg-[#f15e50] hover:bg-[#00001a] text-white py-2 px-8 font font-bold tracking-widest my-4 duration-150'>Read More</button>
      </div>
      </div>
      </div>
    <div className='bg-[#00001a] p-4 md:w-[35%] md:ml-auto'>
    <div className='text-[#e9ab53] font-bold font1 text-2xl my-4'>New</div>
    <h3 className='font1 text-white font-bold text-xl hover:text-[#e9ab53] cursor-pointer duration-150'>Hydrogen VS Electric Cars</h3>
    <p className='mt-2 mb-8 font text-gray-400 text-md'>Will hydrogen-fueled cars ever catch up to EVs?</p>
    <hr />
    <h3 className='font1 text-white font-bold text-xl mt-6 hover:text-[#e9ab53] cursor-pointer duration-150'>The Downsides of AI Artistry </h3>
    <p className='mt-2 mb-8 font text-gray-400 text-md'>what are the possiable adverse effect of on-demand AI image geneation?</p>
    <hr />
    <h3 className='font1 text-white font-bold text-xl mt-6 hover:text-[#e9ab53] cursor-pointer duration-150'>Is VC Funding Drying Up?</h3>
    <p className='mt-2 mb-2 font text-gray-400 text-md'>Private funding by VC firms is down 50% YOY. We take a look at what that meanss. </p>
    </div>
    </section>
    </>
  )
}

export default Body
