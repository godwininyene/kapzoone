import React from 'react';
import {Link } from '@inertiajs/react';
import logo from '@/Img/download.png'
import nekedeLogo from '@/Img/nekedelogo.png'
import {LuMenu} from 'react-icons/lu';
import { FaAddressBook,FaUsers } from "react-icons/fa";
import {IoIosHome, IoMdInformationCircle} from 'react-icons/io';
import {MdGroups2} from 'react-icons/md';
import { VscSignIn, VscDashboard } from 'react-icons/vsc';

const Navigation = () => {
    const[isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = ()=> setIsOpen(prev => !prev);

    const[isFixedClass, setiSFixedClass] = React.useState(false);

    const addFixedClass = ()=> window.pageYOffset > 200 ? setiSFixedClass(true) :setiSFixedClass(false);

    window.addEventListener('scroll', addFixedClass	)
    
    const fixedHeader ={
        position: "fixed",
        top: "0", 
        left: "0",
        width:"100%",
        zIndex: "99",
        // borderBottom: "2px solid #239bea",
        boxShadow:"0 10px 5px rgba(15, 16, 24, 0.1)",
    }
  
    const activeStyle={color:'#F17600'};
 
    return(
        <div className={`header bg-white ${isFixedClass ? 'animate-fadeInDown' :''}`} style={isFixedClass ? fixedHeader : {}}>
            <div className='max-w-6xl mx-auto w-full'> 

                <nav className='flex items-center  justify-between flex-wrap lg:flex-nowrap px-5 py-2 relative'>
                    <Link href="/" className=''>
                        <img src={nekedeLogo} alt="" className="max-w-full"/>
                     
                    </Link>

                    {/*Mobile Nav Icon */}
                    <button className=' border-0 outline-0 shadow-none block lg:hidden' onClick={toggleMenu}>
                        <LuMenu className='text-3xl text-white'/>
                    </button>

                    <div className={`${isOpen ? 'h-44': 'h-0'} overflow-hidden lg:h-auto lg:flex items-center  grow transition-all duration-300 ease-linear`}>
                        <ul className='flex-col  lg:flex-row flex items-center ml-auto' id='header-nav'>
                           
                            <li className=''>
                                <Link href="/" className={`text-base ${route().current('home') ? 'text-gold': 'text-black'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <IoIosHome className='text-base  inline-block mr-1'/>
                                   Home
                                </Link>
                            </li>

                            <li className=''>
                                <Link href="about" className={`text-base ${route().current('about') ? 'text-gold': 'text-black'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <IoMdInformationCircle className='text-base  inline-block mr-1'/>
                                   About
                                </Link>
                            </li>
                           
                            <li className=''>
                                <Link href="contact-us" className={`text-base ${route().current('contact-us') ? 'text-gold': 'text-black'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <FaAddressBook className='text-base  inline-block mr-1'/>
                                    Services
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="contact-us" className={`text-base ${route().current('contact-us') ? 'text-gold': 'text-black'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <MdGroups2 className='text-base  inline-block mr-1'/>
                                    Contact
                                </Link>
                            </li>
                            {/* <li className=''>
                                <Link href="contact-us" className={`text-base ${route().current('contact-us') ? 'text-gold': 'text-black'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <FaUsers  className='text-base  inline-block mr-1'/>
                                    Students Excos
                                </Link>
                            </li> */}
                            <li className="md:ml-8">
                                <Link  className={`py-3 px-5 mx-2 md:mx-0 rounded-3xl transition-all duration-100 bg-green-600 hover:bg-green-800 text-white font-bold`}>
                                    <VscSignIn className="inline-block w-5 h-5" /> <span>Login</span>
                                </Link>
                            </li>
                        </ul>
                      
                    </div>
                </nav>
            </div>
        </div>
    )
  
}

export default Navigation