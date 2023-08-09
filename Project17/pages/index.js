import Head from 'next/head'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';


export default function Home() {
  return (
    <>
    <Head>
      <title>Ping Comming Soon Page - ProjectsByDailyReadingAdmin</title>
    </Head>
    <main>
      <picture>
    <img className='mx-auto w-16 mt-20 mb-8' src="/logo.svg" width={50} height={20}/>
      </picture>
    <h1 className='text-center font text-xl md:text-4xl text-gray-400 font-light md:my-2'>We are launching <span className='font-bold text-black'>soon!</span></h1>
    <p className='text-center font text-sm text-gray-600 font-light md:my-2 my-1'>Subscribe and get notified</p>
    <form className='flex flex-col md:flex-row justify-center items-center md:space-x-4 mx-auto'>
      <input className='w-10/12 md:w-96 px-4 py-3 text-sm text-gray-400 font rounded-full border focus:border-blue-400 border-blue-200 outline-none' type="email" placeholder='Your email address...'/>
      <button className='w-10/12 md:w-40 cursor-pointer bg-blue-700 py-3 rounded-full shadow text-white my-2 font font-semibold '>Notify me</button>
    </form>
    <picture>
    <img className='w-11/12 mx-auto' src="/illustration-dashboard.png" layout="fill"/>
    </picture>
    </main>
    <footer>
    <div className='flex justify-center space-x-4 my-4'>
    <FaFacebookF className='text-4xl md:text-5xl text-blue-600 border border-gray-400 rounded-full p-2'/>
    <AiOutlineTwitter className='text-4xl md:text-5xl text-blue-600 border border-gray-400 rounded-full p-2'/>
    <FiInstagram className='text-4xl md:text-5xl text-blue-600 border border-gray-400 rounded-full p-2'/>
      </div>
      <span className='flex justify-center my-4 text-gray-400 font font-light text-xs'>&copy;Copyright Ping. All rights reserved</span>
    </footer>
    </>
  )
}
