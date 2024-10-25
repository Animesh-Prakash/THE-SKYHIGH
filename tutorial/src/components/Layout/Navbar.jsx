import React, { Component } from 'react'
import Home from '../Home/Home';
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Logo from './Logo.png'
import Hamburger from './hamburger.svg'
function Navbar(){
    const slidebar=()=>{
       
    }
    return(
        <>
       
        <div className='my-20'>
        <nav className=' flex bg-black  p-3 justify-between font-medium absolute top-0 w-[100%] h-[12vh] items-center z-50 below-1200:h-[8vh]'>
        <div className='below-lg:absolute right-5'><img src={Logo} alt="" className='w-[200px]'/></div>
        <div className='hidden below-lg:inline mx-3' ><Link to='/slidebar'><img src={Hamburger} alt="" /></Link></div>
         <ul className='list-none  flex gap-6 text-white  mx-3 below-lg:hidden'> 
          <li className='cursor-pointer'><Link to='/'>Home</Link> </li>
          <li className='cursor-pointer'><Link to='/classes'>Classes</Link></li>
          <li className='cursor-pointer'> <Link to='/book'>Book and Solution</Link></li>
          <li className='cursor-pointer'><Link to='/cbse'>CBSE</Link></li>
          <li className='cursor-pointer'><Link to='/neet'>JEE and NEET</Link></li>
          <li className='cursor-pointer'><Link to='/hinduism'>HINDUISM BOOKS</Link></li>
         </ul>
        </nav>
        </div>
     
        </>
    )
}
export default Navbar;