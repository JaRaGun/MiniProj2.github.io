import React ,{useState}from 'react'
import {Transition} from '@headlessui/react';
import {Link} from 'react-scroll';
import Image from 'next/image';


function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
        {/* For Main NavContainer */}
        <nav className='shadow-sm fixed w-full z-10 bg-black bg-hero-pattern bg-cover bg-bot' >
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    {/* first block section Outer part */}
                    <div className='flex items items-center mx-20 justify-around w-full'>
                        <div className='flex justify-center items-center flex-shrink-0'>
                           <Image
                                src= '/Covid-Logo.png'
                                width={90}
                                height={90}    
                                alt='Logo'
                           />
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <Link 
                                activeClass="Home" 
                                to='overview' 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-bold'>
                                   HOME
                                </Link>

                                <Link 
                                activeClass="overview" 
                                to='overview' 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='cursor-pointer hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                                   OVERVIEW
                                </Link>

                                <Link 
                                activeClass="developers" 
                                to='developers' 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='cursor-pointer hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                                   DEVELOPERS
                                </Link>

                                <Link 
                                activeClass="newsUpdate" 
                                to='newsUpdate' 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='cursor-pointer hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                                   NEWS-UPDATE
                                </Link>

                                <Link 
                                activeClass="resources" 
                                to="resources" 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className='cursor-pointer hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                                   RESOURCES                               
                                </Link>
                            </div>
                        </div>
                    </div>
                        <div className='mr-10 md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)} type='button' className='bg-green-400 inline-flex item-center justify-start p-2 rounded-md text-white hover:bg-green-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                {!isOpen?(
                                    <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                                    </svg>
                                ):(
                                    <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                                    </svg>
                                )}
                            </button>
                        </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                >
                    {(ref) =>(
                        <div className='md:hidden id=mobile-menu'>
                            <div
                             ref={ref}
                             className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                <Link
                                 href='/home'
                                 activeClass='home'
                                 to='home' smooth={true} offset={50} duration={500} 
                                 className='cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'> HOME
                                </Link>

                                <Link
                                 href='/overview'
                                 activeClass='overview'
                                 to='overview' smooth={true} offset={50} duration={500} 
                                 className='cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'> OVERVIEW
                                </Link>

                                <Link
                                 href='/developers'
                                 activeClass='developers'
                                 to='developers' smooth={true} offset={50} duration={500} 
                                 className='cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'> DEVELOPERS
                                </Link>

                                <Link
                                 href='/newsUpdate'
                                 activeClass='newsUpdate'
                                 to='newsUpdate' smooth={true} offset={50} duration={500} 
                                 className='cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>  NEWS-UPDATE
                                </Link>

                                <Link
                                 href='/resources'
                                 activeClass='resources'
                                 to='resources' smooth={true} offset={50} duration={500} 
                                 className='cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'> RESOURCES
                                </Link>

                            </div>

                        </div>
                    )}

            </Transition>
        </nav>
    </div>
  )
}

export default Navbar