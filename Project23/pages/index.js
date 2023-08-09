import { useState } from 'react'
import Data from '../JSON/data.json'
export default function Home() {
  const [time , setTime] = useState(1)
  return (
    <>
    <section className='relative flex flex-col justify-center mt-24 space-y-8 md:w-[20%] md:mr-auto'>
        <div className='flex justify-center'>
          <div className='bg-[#5847eb] rounded-lg p-4 absolute top-0 w-[80%] h-28 md:h-96 flex md:flex-col items-center'>
            <img className="rounded-full border-white border-[3px] w-16 h-16 inline md:mr-auto" src="/images/image-jeremy.png" alt="" />
            <div className='inline-flex flex-col ml-4 md:flex md:my-8'>
              <span className='text-gray-300 font font-medium text-xs md:text-sm'>Report for</span>
              <span className='text-white font font-light tracking-wide text-lg md:text-5xl md:mt-4'>Jeremy Robson</span>
            </div>
          </div>
          <div className='bg-[#1c1f4a] py-6 px-4 rounded-b-lg w-[80%] mt-24 md:mt-[23rem]'>
            <ul className='flex space-x-2 justify-evenly font font-medium text-[#6f76c8] mt-4'>
              <li onClick={()=> setTime(1)} className={time == 1 ? "text-white" : ""}>Daily</li>
              <li onClick={()=> setTime(2)} className={time == 2 ? "text-white" : ""}>Weekly</li>
              <li onClick={()=> setTime(3)} className={time == 3 ? "text-white" : ""}>Monthly</li>
            </ul>
          </div>
        </div>
      <div className='relative flex flex-col justify-center mt-12 space-y-8'>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#ff8c66] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-work.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full top-16 p-6 bg-[#1c1f4a] rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[0].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[0].timeframes.daily.current}{time == 2 && Data[0].timeframes.weekly.current}{time == 3 && Data[0].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[0].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[0].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[0].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-24'></div>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#56c2e6] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-play.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full p-6 bg-[#1c1f4a] top-16 rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[1].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[1].timeframes.daily.current}{time == 2 && Data[1].timeframes.weekly.current}{time == 3 && Data[1].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[1].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[1].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[1].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-24'></div>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#ff5c7c] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-study.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full p-6 bg-[#1c1f4a] top-16 rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[2].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[2].timeframes.daily.current}{time == 2 && Data[2].timeframes.weekly.current}{time == 3 && Data[2].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[2].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[2].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[2].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-24'></div>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#4acf81] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-exercise.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full p-6 bg-[#1c1f4a] top-16 rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[3].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[3].timeframes.daily.current}{time == 2 && Data[3].timeframes.weekly.current}{time == 3 && Data[3].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[3].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[3].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[3].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-24'></div>
        <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#7536d3] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-social.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full p-6 bg-[#1c1f4a] top-16 rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[4].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[4].timeframes.daily.current}{time == 2 && Data[4].timeframes.weekly.current}{time == 3 && Data[4].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[4].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[4].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[4].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
      <div className='h-24'></div>
      <div className='w-[80%] mx-auto relative'>
          <div className='bg-[#f1c65b] h-20 rounded-t-lg'>
            <img className="absolute right-0 opacity-75" src="/images/icon-self-care.svg" alt="" />
          </div>
          <div className='absolute h-32 w-full p-6 bg-[#1c1f4a] top-16 rounded-xl'>
            <div className='flex justify-between'>
              <div>
            <span className='font font-bold text-lg text-white block'>{Data[5].title}</span>
            <span className='font font-light text-4xl text-white'>{time == 1 && Data[5].timeframes.daily.current}{time == 2 && Data[5].timeframes.weekly.current}{time == 3 && Data[5].timeframes.monthly.current}hrs</span>
              </div>
              <div>
                <img className="mt-2 mb-6 ml-auto" src="/images/icon-ellipsis.svg" alt="" />
                <span className='font font-medium text-md text-gray-400'>{time == 1 && "LastDay -" + Data[5].timeframes.daily.current}{time == 2 && "LastWeek -" + Data[5].timeframes.weekly.current}{time == 3 && "LastMonth -" + Data[5].timeframes.monthly.current}hrs</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
