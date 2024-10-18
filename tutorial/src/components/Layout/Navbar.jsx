import React, { Component } from 'react'
import Home from '../Home/Home';
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function Navbar(){
    
    return(
        <>
        <div className='my-24'>
        <nav className=' flex bg-black p-3 justify-between font-medium fixed top-0 w-[100%] h-[20vh] items-center z-50 '>
        <div>Logo</div>
         <ul className='list-none  flex gap-6 text-white mx-3 '> 
          <li className='cursor-pointer'><Link to='/'>Home</Link> </li>
          <li className='cursor-pointer'><Link to='/classes'>Classes</Link></li>
          <li className='cursor-pointer'> <Link to='/book'>Book and Solution</Link></li>
          <li className='cursor-pointer'><Link to='/cbse'>CBSE</Link></li>
          <li className='cursor-pointer'><Link to='/neet'>JEE and NEET</Link></li>
       
          {/* <li className='cursor-pointer'><Link to='/icse'>ICSE</Link></li> */}
          <li className='cursor-pointer'><Link to='/hinduism'>HINDUISM BOOKS</Link></li>
         </ul>
        </nav>
        </div>
          
     
        </>
    )
}
export default Navbar;