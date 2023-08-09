import React from 'react'
import { useForm } from "react-hook-form";
import bg from '../images/bg-pattern-desktop.svg'
import logo from '../images/logo.svg'
import mobile from '../images/hero-mobile.jpg'
import desktop from '../images/hero-desktop.jpg'
import button from '../images/icon-arrow.svg'

const Main = () => {
  const { register, setError, formState: { errors } } = useForm();
  return (
    <>
    <img src={bg} alt="background pattern" className='-z-10 h-[100vh] w-[100vw] absolute top-0 left-0' />
      <img className='w-24 h-auto m-4 mb-6 md:w-48 md:mt-16 md:ml-24' src={logo} alt="logo" />
      <picture>
        <source media="(max-width:768px)" srcset={mobile}/>
        <img src={desktop} alt="image" className='md:absolute md:top-0 md:right-0 md:h-full'></img>
      </picture>
      <div className='md:w-1/2 md:ml-24 md:mr-auto mb-4'>
      <h1 className='tracking-[0.2em] text-5xl t text-center font font-semibold mt-12 text-2 md:text-left'><span className='font-light font text1 block'>WE'RE</span><span className='block'>COMING</span>SOON</h1>
      <p className='text1 text-sm text-center font font-light mx-8 p-4 md:text-left md:w-1/2 md:mx-0 md:p-0 md:py-6 md:text-md'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and ourlaunch deals</p>
      <div className='flex justify-center md:justify-start'>
      <div className='relative'>
      <form action="">
      <input {...register("email")} className='border border-pink-100 outline-none focus:border-2 focus:border-pink-300 rounded-full p-4 md:w-96' type="email" placeholder='Email Address' />
      {errors.test && <p>{errors.test.message}</p>}
      <button onClick={() => {setError("Email not valid", { type: "focus" }, { shouldFocus: true });}} type='submit' require={true}  className='btn absolute top-1 -right-5 bg w-16 h-12 rounded-full shadow-xl shadow-pink-200'><img className='w-3 m-auto' src={button} alt="button" /></button>
        </form>
      </div>
      </div>
      </div>
    </>
  )
}

export default Main
