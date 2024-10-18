import React from 'react'
import { useState } from 'react';
import Navbar from '../../Layout/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Class_solution = () => {
        const [isPrimaryPath, setIsPrimaryPath] = useState(true); 
  const navigate = useNavigate();  // Use for programmatic navigation

  const handleTogglePath = () => {
    setIsPrimaryPath(!isPrimaryPath);
    // Navigate based on the new state
    navigate(isPrimaryPath ? '/class10' : '/mention');
  };

  return (
    <>
    <Navbar/>
     <div className='mt-36'>
       <h1 className='text-6xl font-medium text-center m-10'>NCERT Solution</h1>
       <div className=' h-[52vh] flex justify-center '>
        <div className='flex justify-evenly flex-wrap w-[60vw]'>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/first'>Class I</Link>
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/second'>Class II</Link>
     
    </button>  
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/third'>Class III</Link> 
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/fourth'>Class IV</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/fivth'>Class V</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/sixth'>Class VI</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/seventh'>Class VII</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/eight'>Class VIII</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer " onClick={handleTogglePath}>
            <Link  to={isPrimaryPath ? '/class10' : '/mention'}>Class IX</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/class10'>Class X</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/eleventh'>Class XI</Link>
     
    </button>
            <button className="relative flex items-center justify-center  text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px]  h-[120px] cursor-pointer ">
            <Link to='/classes/twelth'>Class XII</Link>
     
    </button>
        </div>
       </div>
       </div>
    </>
  )
}

export default Class_solution;
