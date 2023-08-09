import React from 'react'
import retro from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'
const Blog = () => {
  return (
    <>
      <section className='w-11/12 mx-auto md:flex md:justify-between md:max-w-[72rem] space-x-2'>
        <div className='flex mt-16 md:mt-8 max-w-[22rem]'>
            <img className='w-28 h-auto md:w-28 md:h-32' src={retro} alt="pc" />
            <div className='flex-col ml-4'>
                <span className='font1 text-[#c5c6ce] text-4xl'>01</span>
                <h3 className='font1 text-xl text-[#00001a] my-2 hover:text-[#f15e50] cursor-pointer duration-150'>Reviving Retro PCs</h3>
                <p className='text-[#5d5f79] font text-md my-2'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='flex mt-8 max-w-[22rem]'>
            <img className='w-28 h-auto md:w-28 md:h-32' src={laptop} alt="pc" />
            <div className='flex-col ml-4'>
                <span className='font1 text-[#c5c6ce] text-4xl'>02</span>
                <h3 className='font1 text-xl text-[#00001a] my-2 hover:text-[#f15e50] cursor-pointer duration-150'>Top 10 laptop of 2022</h3>
                <p className='text-[#5d5f79] font text-md my-2'>Our best picks for various needs & budgets</p>
            </div>
        </div>
        <div className='flex mt-8 mb-20 max-w-[22rem]'>
            <img className='w-28 h-auto md:w-28 md:h-32' src={gaming} alt="pc" />
            <div className='flex-col  ml-4'>
                <span className='font1 text-[#c5c6ce] text-4xl'>03</span>
                <h3 className='font1 text-xl text-[#00001a] my-2 hover:text-[#f15e50] cursor-pointer duration-150'>The Growth of Gaming</h3>
                <p className='text-[#5d5f79] font text-md my-2'>How the pandemic has sparked fresh opportunities</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog
