import React, { Component } from 'react'
import Insta from '../Home/img/instagram.svg'
import Facebook from '../Home/img/facebook.svg'
import Yt from '../Home/img/yt.svg'
function Footer(){
    return(
        <>
    <div className='h-[250px] w-[100%] bg-[#c7c9bd] flex py-5 px-10'>
        <div  className='w-[50%] flex flex-col items-start justify-center'>
        <h1 className='text-2xl font-medium'>Follow us</h1>
       <ul className='flex flex-col items-center gap-2'>
        <li ><a href=""><img src={Insta} alt="Instagram" className='w-[30px] transition-all hover:w-[35px]' /></a></li>
        <li ><a href=""><img src={Yt} alt="Instagram" className='w-[30px] transition-all hover:w-[35px]' /></a></li>
        <li ><a href=""><img src={Facebook} alt="Instagram" className='w-[30px] transition-all hover:w-[35px]' /></a></li>
       </ul>
       <div className='my-4'>
       <div className='text-sm'>Developed by</div>
       <div className='text-sm'>THE SKYHIGH |  Copyright© 2024 | THE SKYHIGH</div>
       </div>
        </div>

        <div className='w-[50%] flex flex-col items-start'>
        <h1 className='text-2xl font-medium'>@The Skyhigh</h1>
        </div>
        </div>
        </>
    )
}
export default Footer;