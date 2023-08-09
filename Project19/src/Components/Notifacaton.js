import React , {useState} from 'react'
import pic1 from '../assets/images/avatar-mark-webber.webp'
import pic2 from '../assets/images/avatar-angela-gray.webp'
import pic3 from '../assets/images/avatar-jacob-thompson.webp'
import pic4 from '../assets/images/avatar-rizky-hasanuddin.webp'
import pic5 from '../assets/images/avatar-kimberly-smith.webp'
import pic6 from '../assets/images/image-chess.webp'
import pic7 from '../assets/images/avatar-nathan-peterson.webp'
import pic8 from '../assets/images/avatar-anna-kim.webp'

const Notifacaton = () => {
  const [read , setRead] = useState(0)
  return (
    <>
    <main className='md:flex md:justify-center md:items-center md:flex-col md:max-w-[48rem] md:mx-auto'>
        <div className='md:bg-white md:p-8 md:rounded-xl'>

      <nav className='flex justify-between items-center w-11/12 mx-auto my-4'>
        <h2 className='fam-bold text-extrabold text-black text-2xl'>Notifacations <span className='m-auto w-6 h-4 bg-[#0a317b] text-white py-1 px-2 text-[.980rem] rounded-md'>{read == 0 ? "3" : "0"}</span></h2>
        <span onClick={()=> setRead(1)} className='text-[#5e6778] hover:text-[#0a317b] cursor-pointer fam-medium font-medium'>Mark all as read</span>
      </nav>
      <section className='space-y-4'>
        <div className={`${read == 0 ? 'bg-[#f7fafd] hover:bg-[#dde7ee] cursor-pointer' : ""} ${'duration-150  mx-4 p-4 rounded-lg flex'}`}>
            <img className='w-12 h-12' src={pic1} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Mark Webber</span> reacted to your recent post <span className='cursor-pointer ml-1 text-md font-bold text-[#5e6778] hover:text-[#0a317b]'>My first tournament today!</span><span className='text-red-500 mx-1 text-xl'>{read == 0 ? "•" : ""}</span></p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>1min ago</span>
            </div>
        </div>
        <div className={`${read == 0 ? 'bg-[#f7fafd] hover:bg-[#dde7ee] cursor-pointer' : ""} ${'duration-150  mx-4 p-4 rounded-lg flex'}`}>
            <img className='w-12 h-12' src={pic2} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Angela Gray</span>followed you.<span className='text-red-500 mx-1 text-xl'>{read == 0 ? "•" : ""}</span></p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>5m ago</span>
            </div>
        </div>
        <div className={`${read == 0 ? 'bg-[#f7fafd] hover:bg-[#dde7ee] cursor-pointer' : ""} ${'duration-150  mx-4 p-4 rounded-lg flex'}`}>
            <img className='w-12 h-12' src={pic3} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Jacob Thompson</span>has joined your group<span className='cursor-pointer ml-1 text-md font-bold text-[#5e6778] hover:text-[#0a317b]'>Chess Club</span><span className='text-red-500 mx-1 text-xl'>{read == 0 ? "•" : ""}</span></p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>1 day ago</span>
            </div>
        </div>
        <div className='mx-4 p-4 flex'>
            <img className='w-12 h-12 ' src={pic4} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Rizky Hasanuddin</span>sent you a private message</p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>5 day ago</span>
            <div className='ml-4 my-2 border-[0.2px] border-gray-300 rounded-md p-4'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</div>
            </div>
        </div>
        <div className='mx-4 p-4 flex'>
            <img className='w-12 h-12 ' src={pic5} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Kimberly Smith</span>commented on your picture</p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>1 week ago</span>
            </div>
            <img className='w-12 h-12 my-auto ml-auto' src={pic6} alt="chess" />
        </div>
        <div className='mx-4 p-4 flex'>
            <img className='w-12 h-12' src={pic7} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Nathan Peterson</span>reacted to your recent post <span className='cursor-pointer ml-1 text-md font-bold text-[#5e6778] hover:text-[#0a317b]'>5 end-game strategies to increase your win rate</span> </p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>2 weeks ago</span>
            </div>
        </div>
        <div className='mx-4 p-4 flex'>
            <img className='w-12 h-12' src={pic8} alt="mark-webber" />
            <div className='flex-col'>
            <p className='ml-4 fam-medium font-medium text-[#5e6778] text-sm'><span className='cursor-pointer text-md font-semibold text-black hover:text-[#0a317b] mr-1'>Anna Kim</span>left the group <span className='cursor-pointer ml-1 text-md font-bold text-[#5e6778] hover:text-[#0a317b]'>Chess Club</span></p>
            <span className='ml-4 text-gray-400 fam-medium font-light text-sm'>2 weeks ago</span>
            </div>
        </div>
      </section>
                </div>
    </main>
    </>
  )
}

export default Notifacaton
