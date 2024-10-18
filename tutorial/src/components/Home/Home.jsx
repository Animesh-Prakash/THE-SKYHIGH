import { useState } from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'
import Imgslidebar from './Imgslidebar'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Jee from '../Home/img/JEE.jpg'
import Neet from '../Home/img/NEET.jpg'
import React from 'react'
import Hindu from '../Home/img/Hinduism.jpg'

function Home() {
  const [count, setCount] = useState(0)
 

  return (
    <>
  
    <Navbar/>
    <div className='mt-36 '>
    <Imgslidebar/>
    </div>
   
   <div className='border-2 border-gray-500 rounded-xl w-[90vw] h-[40vh] m-auto flex justify-center items-center flex-col px-10 gap-5 my-16'>
    <h1 className='text-4xl font-extrabold'>We’re thrilled to have you here!</h1>
    <p className='text-sm'>Feel free to browse around and discover all that we have to offer. If you have any 
      questions or need assistance, don’t hesitate to reach out. Thank you for visiting,
       and we hope you enjoy your experience!</p>
   </div>
     {/* <div className='slideshow h-[300px] bg-[#c7c9bd] my-8 mx-8 p-5 rounded-3xl '>
   
     <h1 className='text-6xl font-extrabold'>The Skyhigh</h1>
     <h2 className=' font-medium mx-3 '>your way to reach high</h2>
     <p className='my-5 text-lg'>Discover the joy of learning with The SKIHIGH. Dive deep into
       subjects like Math, Science, and English, and build a strong foundation for your academic future.</p>
     </div> */}
     <div className='flex justify-evenly'>
     <div className='w-[345px] h-[440px] rounded-3xl border-2 border-gray-300 m-1 flex flex-col items-center relative'>
  <div className='w-full h-[35vh] rounded-t-2xl transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Jee})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className='w-[85%] flex flex-col items-start my-4 gap-2'>
    <h2 className='text-2xl mt-5 font-medium'>CBSE</h2>
    <p className='text-sm'>At our platform, we pride ourselves on offering the best comprehensive notes and solutions tailored specifically for CBSE students from classes 1st to 12th. </p>
  </div>
  <button className='p-2 rounded-xl hover:bg-[#5462c6]'>
    <Link to='/hinduism'>Read more</Link>
  </button>
</div>

     <div className='w-[345px] h-[460px] rounded-3xl border-2 border-gray-300 m-1 flex flex-col items-center relative'>
  <div className='w-full h-[35vh] rounded-t-2xl transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Neet})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className='w-[85%] flex flex-col items-start my-4 gap-2'>
    <h2 className='text-2xl mt-5 font-medium'>NEET and JEE</h2>
    <p className='text-sm'>Our website offers an extensive collection of NEET & JEE exam materials, including sample papers, previous years' question papers, and comprehensive notes designed to enhance your preparation.</p>
  </div>
  <button className='p-2 rounded-xl hover:bg-[#5462c6]'>
    <Link to='/hinduism'>Read more</Link>
  </button>
</div>

     <div className='w-[345px] h-[440px] rounded-3xl border-2 border-gray-300 m-1 flex flex-col items-center relative'>
  <div className='w-full h-[35vh] rounded-t-2xl transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Hindu})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className='w-[85%] flex flex-col items-start my-4 gap-2'>
    <h2 className='text-2xl mt-5 font-medium'>HINDUISM</h2>
    <p className='text-sm'>Hinduism, one of the world's oldest religions, is a rich tapestry of beliefs, practices, and philosophies that originated in the Indian subcontinent.</p>
  </div>
  <button className='p-2 rounded-xl hover:bg-[#5462c6]'>
    <Link to='/hinduism'>Read more</Link>
  </button>
</div>


     </div>
  
  <div className=' border-gray-500 w-[90vw] h-[100vh] my-12 m-auto flex justify-evenly items-start'>
    <div className='w-[30vw] h-full mt-0 mx-5 flex items-center flex-col gap-5 border-2 rounded-[30px] p-3 transition-all hover:shadow-2xl hover:shadow-slate-400'>
      <div className='w-full h-[40vh] rounded-[30px]' style={{backgroundImage: `url(${Hindu})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
      <h1 className='text-3xl font-semibold text-center'>Become a Family Champion Trainer</h1>
      <p className='text-center'>Become a Master Family Champion and learn how to equip and empower 
        other families on how to champion the spiritual formation of their home.</p>
        <button className='bg-red-700 w-[110px] h-[45px] rounded-xl hover:w-[120px] hover:h-[50px] transition-all'>Read more</button>

    </div>
    <div className='w-[30vw] h-full mt-0 mx-5 flex items-center flex-col gap-5 border-2 rounded-[30px] p-3 transition-all hover:shadow-2xl hover:shadow-slate-400'>
      <div className='w-full h-[40vh] rounded-[30px]' style={{backgroundImage: `url(${Hindu})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
      <h1 className='text-3xl font-semibold text-center'>Become a Family Champion Trainer</h1>
      <p className='text-center'>Become a Master Family Champion and learn how to equip and empower 
        other families on how to champion the spiritual formation of their home.</p>
        <button className='bg-red-700 w-[110px] h-[45px] rounded-xl hover:w-[120px] hover:h-[50px] transition-all'>Read more</button>

    </div>
  </div>
   <Footer/>
    </>
  )
}

export default Home
