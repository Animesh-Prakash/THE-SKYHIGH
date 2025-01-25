import { useState, useEffect } from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'
import Imgslidebar from './Imgslidebar'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Jee from '../Home/img/JEE.jpg'
import Neet from '../Home/img/NEET.jpg'
import React from 'react'
import Hindu from '../Home/img/Hinduism.jpg'
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script


function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='relative mt-24 h-[100%] below-1200:mt-48 below-500:mt-24'>
        <div data-aos="zoom-in-down" className=' w-full '>
          <Imgslidebar />
        </div>

        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=' border-2  rounded-xl w-[90vw] h-[40vh] m-auto flex justify-center items-center
    flex-col px-10 gap-5 my-16 below-1200:h-[20vh] below-1200:my-10 below-500:h-[30vh] below-500:my-10 below-500:rounded-3xl'>
          <h1 className='text-4xl font-extrabold'>We’re thrilled to have you here!</h1>
          <p className='text-sm'>Feel free to browse around and discover all that we have to offer. If you have any
            questions or need assistance, don’t hesitate to reach out. Thank you fo ustify-startr visiting,
            and we hope you enjoy your experience!</p>
        </div>
        {/* <div className='slideshow h-[300px] bg-[#c7c9bd] my-8 mx-8 p-5 rounded-3xl '>
   
     <h1 className='text-6xl font-extrabold'>The Skyhigh</h1>
     <h2 className=' font-medium mx-3 '>your way to reach high</h relative left-02>
     <p className='my-5 text-lg'>Discover the joy of learning with The SKIHIGH. Dive deep into
       subjects like Math, Science, and English, and build a strong foundation for your academic future.</p>
     </div> */}
        <div data-aos="zoom-in-right" className='flex justify-evenly items-center h-fit py-8 gap-5 bg-slate-100 flex-wrap '>
          <div data-aos="flip-right" data-aos-delay="1000" className='w-[345px] h-[470px] rounded-3xl relative  border-gray-300 m-1 flex flex-col items-center justify-start relative'>
            <div className='w-full h-[38vh]  transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Jee})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='w-full flex flex-col items-start justify-start my-4 gap-2'>
              <h2 className='text-2xl mt-5 font-medium '>CBSE</h2>
              <p className='text-sm'>At our platform, we pride ourselves on offering the best comprehensive notes and solutions tailored specifically for CBSE students from classes 1st to 12th. </p>
            </div>
            <button className='p-3 rounded-xl  bg-slate-900 text-white px-4 hover:bg-slate-700 self-start my-2'>
              <Link to='/cbse'>Read more</Link>
            </button>
          </div>

          <div data-aos="flip-down" data-aos-delay="1000" className='w-[345px] h-[470px] rounded-3xl relative border-gray-300 m-1 flex flex-col  items-center  relative'>
            <div className='w-full h-[38vh]  transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Neet})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='w-full flex flex-col items-start justify-start my-4 gap-2'>
              <h2 className='text-2xl mt-5 font-medium '>NEET and JEE</h2>
              <p className='text-sm'>Our website offers an extensive collection of NEET & JEE exam materials, including sample papers, and comprehensive designed to enhance your preparation.</p>
            </div>
            <button className='p-3 rounded-xl  bg-slate-900 text-white px-4 hover:bg-slate-700 self-start my-2'>
              <Link to='/neet'>Read more</Link>
            </button>
          </div>

          <div data-aos="flip-left" data-aos-delay="1000" className='w-[345px] h-[470px] rounded-3xl relative border-gray-300 m-1 flex flex-col  items-center jus relative'>
            <div className='w-full h-[38vh]  transition-all duration-300 transform hover:scale-105' style={{ backgroundImage: `url(${Hindu})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='w-full flex flex-col items-start justify-start my-4 gap-2'>
              <h2 className='text-2xl mt-5 font-medium '>HINDUISM</h2>
              <p className='text-sm'>Hinduism, one of the world's oldest religions, is a rich tapestry of beliefs, practices, and philosophies that originated in the Indian subcontinent.</p>
            </div>
            <button className='p-3 rounded-xl  bg-slate-900 text-white px-4 hover:bg-slate-700 self-start my-2'>
              <Link to='/hinduism'>Read more</Link>
            </button>
          </div>
        </div>


      </div>


      <Footer />
    </>
  )
}

export default Home
