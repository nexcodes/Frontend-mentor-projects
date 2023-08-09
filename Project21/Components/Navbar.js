import React , {useState} from 'react'

const Navbar = () => {
    const [visible1 , setVisible1] = useState("0")
    const [visible2 , setVisible2] = useState("0")
    const [sideBar , setSideBar] = useState("0")
    function Leave1() {
        setTimeout(() => {
            setVisible1("0")
        }, 200);
    }
    function Leave2() {
        setTimeout(() => {
            setVisible2("0")
        }, 200);
    }
  return (
    <>
      <nav className='m-4 flex justify-between text-gray-500 font font-medium'>
        <div className='flex items-center'>
        <img className='md:mr-16' src="/images/logo.svg" alt="logo" />
        {/* Destop */}
        <ul className='md:space-x-8 hidden md:flex'>
            <div onMouseEnter={()=> setVisible1("1")} onMouseLeave={Leave1}>
            <li className='hover:text-gray-900 cursor-pointer duration-150 flex'>Features <img className='w-3 h-2 ml-1 mt-2' src={visible1 == 1 ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></li>
            { visible1 == 1 &&
                <div className='bg-white rounded-xl shadow-2xl absolute -ml-12 mt-2'>
                <ul className='p-6 text-md font font-bold space-y-4'>
                    <li><img className="inline mr-1" src="/images/icon-todo.svg" alt="icon-todo" />Todo List</li>
                    <li><img className="inline mr-1" src="/images/icon-calendar.svg" alt="icon-calendar" />Calendar</li>
                    <li><img className="inline mr-1" src="/images/icon-reminders.svg" alt="icon-reminders" />Reminders</li>
                    <li><img className="inline mr-1" src="/images/icon-planning.svg" alt="icon-planning" />Planning</li>
                </ul>
            </div>
            }
            </div>
            <div onMouseEnter={()=> setVisible2("1")} onMouseLeave={Leave2}>
                <li className='hover:text-gray-900 cursor-pointer duration-150 flex'>Company <img className='w-3 h-2 ml-1 mt-2' src={visible2 == 1 ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></li>
            { visible2 == 1 &&
            <div className='bg-white rounded-xl shadow-2xl absolute ml-4 mt-2'>
                <ul className='p-6 text-md font font-bold space-y-4'>
                    <li>Histroy</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
            </div>
        }
            </div>
            <li className='hover:text-gray-900 cursor-pointer duration-150'>Careers</li>
            <li className='hover:text-gray-900 cursor-pointer duration-150'>About</li>
        </ul>
        </div>
        <div className='md:space-x-4 items-center ml-auto hidden md:flex'>
        <button className='hover:text-gray-900'>Login</button>
        <button className='hover:text-gray-900 border border-gray-900 rounded-lg py-1 px-3'>Register</button>
        </div>
        {/* Phone */}
        <button onClick={()=> setSideBar(true) }><img className="md:hidden" src="/images/icon-menu.svg" alt="Hamburger" /></button>
        { sideBar == true &&

            <div className='absolute top-0 bottom-0 right-0 bg-white min-w-[14rem] md:hidden'>
            <button onClick={()=> setSideBar(false) } className='absolute right-4 top-4'><img src="/images/icon-close-menu.svg" alt="Close" /></button>
        <ul className='space-y-4 mt-24 px-8 font-bold'>
            <div>
            <li onClick={()=> visible1 == true ? setVisible1(false) : setVisible1(true)} className='hover:text-gray-900 cursor-pointer duration-150 flex'>Features <img className='w-3 h-2 ml-1 mt-2' src={visible1 ==  true ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></li>
                {visible1 == true && <ul className='p-6 text-md font font-bold space-y-4'>
                    <li><img className="inline mr-1" src="/images/icon-todo.svg" alt="icon-todo" />Todo List</li>
                    <li><img className="inline mr-1" src="/images/icon-calendar.svg" alt="icon-calendar" />Calendar</li>
                    <li><img className="inline mr-1" src="/images/icon-reminders.svg" alt="icon-reminders" />Reminders</li>
                    <li><img className="inline mr-1" src="/images/icon-planning.svg" alt="icon-planning" />Planning</li>
                </ul>}
            </div>
            <div>
                <li onClick={()=> visible2== true ? setVisible2(false) : setVisible2(true)} className='hover:text-gray-900 cursor-pointer duration-150 flex'>Company <img className='w-3 h-2 ml-1 mt-2' src={visible2 ==  true ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></li>
                {visible2 ==  true && <ul className='p-6 text-md font font-bold space-y-4'>
                    <li>Histroy</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>}
            </div>
            <li className='hover:text-gray-900 cursor-pointer duration-150'>Careers</li>
            <li className='hover:text-gray-900 cursor-pointer duration-150'>About</li>
        </ul>
        <div className='px-8 flex flex-col justify-center items-center space-y-4 font-bold'>
        <button className='hover:text-gray-900 mt-2 w-auto'>Login</button>
        <button className='hover:text-gray-900 border border-gray-900 rounded-lg py-1 px-3 w-full'>Register</button>
        </div>
        </div>
        }
      </nav>
    </>
  )
}

export default Navbar
