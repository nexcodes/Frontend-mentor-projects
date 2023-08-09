import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>Intro Component Signup Form - ProjectByDailyReadingAdmin</title>
    </Head>
    <picture>
      <source media='(max-width:768px)' src="/bg-intro-mobile.png" alt="background icons" />
      <img className='-z-20 absolute w-screen h-[150vh] top-0' src="/bg-intro-desktop.png" alt="background icons" />
      <div className='bg-[#ff7a7a] absolute opacity-70 -z-10 w-screen h-[150vh] top-0'></div>
    </picture>
    <section className='md:flex'>
      <div className='flex-col md:w-1/2 md:my-auto'>
      <h1 className='text-center md:text-left md:mx-16 text-white font-bold text-3xl md:text-5xl my-8 mx-16'>Learn to code by watching others</h1>
      <p className='text-center md:text-left md:mx-16 text-gray-200 font-light text-md md:text-xl mx-6'>see how experienced developer solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className='md:flex-col'>
      <div className='flex justify-center items-center '>
      <button className='bg-blue-800 text-white p-4 rounded-lg w-11/12 mt-12 mb-4 shadow'><span className='font-semibold text-xl'>Try it free 7 days</span> then <span className='block md:inline'>$20/mo. thereafter</span> </button>
      </div>
      <div className='bg-white mx-6 rounded-lg'>
        <form>
          <div className='flex justify-center items-center p-4 flex-col space-y-4'>
        <input className='w-full p-3 text-gray-800 font-bold border border-gray-400 rounded-lg focus:border-pink-500 outline-none' type="text" name="FName" id="LName" placeholder='FirstName'/>
        <input className='w-full p-3 text-gray-800 font-bold border border-gray-400 rounded-lg focus:border-pink-500 outline-none' type="text" name="LName" id="LName" placeholder='LastName'/>
        <input className='w-full p-3 text-gray-800 font-bold border border-gray-400 rounded-lg focus:border-pink-500 outline-none' type="email" name="email" id="email" placeholder='Email Address'/>
        <input className='w-full p-3 text-gray-800 font-bold border border-gray-400 rounded-lg focus:border-pink-500 outline-none' type="password" name="password" id="password" placeholder='Password'/>
      <button className='bg-green-500 text-white p-4 rounded-lg w-11/12 mt-12 mb-4 shadow'><span className='font-semibold text-xl'>Claim Your Free Trail</span> </button>
      <p className='text-gray-300 font-medium text-center mx-4 text-sm'>By clicking the button, you are agreeing to our <a className='text-pink-500 cursor-pointer'>Terms and Services</a></p>
          </div>
        </form>
      </div>
      </div>
    </section>
    </>
  )
}
