import React from 'react'
import Navbar from '../../../Layout/Navbar'
import { Link } from 'react-router-dom'
const Class10 = () => {
  return (
    <>
   <Navbar/>
   <div className='mt-[90px]'>
    <div>
  <ul className='mt-[30vh] flex m-auto w-[30vw]'> 
        <li className='bg-slate-300 w-fit h-[40px] px-6 font-bold flex justify-center items-center border-2 border-black mx-4'><Link to='/maths'>Maths</Link></li>
        <li className='bg-slate-300 w-fit h-[40px] px-6 font-bold flex justify-center items-center border-2 border-black mx-4'><Link to='/science'>Science</Link></li>
        <li className='bg-slate-300 w-fit h-[40px] px-6 font-bold flex justify-center items-center border-2 border-black mx-4'><Link to='/sst'>SST</Link></li>
        <li className='bg-slate-300 w-fit h-[40px] px-6 font-bold flex justify-center items-center border-2 border-black mx-4'><Link to='/english'>English</Link></li>
      </ul>
    </div>
   </div>
    </>
  )
}

export default Class10;
