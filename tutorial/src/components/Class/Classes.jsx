// Classes.jsx
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script

function Classes() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className='mt-36 h-[100%] '>
        <h1 data-aos="fade-down" className='text-6xl font-medium text-center m-10'>Explore Our Classes</h1>
        <div className='h-fit  flex justify-center'>
          <div data-aos="zoom-out-up" className='flex justify-evenly flex-wrap w-[60vw] below-lg:w-[80vw] below-sm:w-[90vw]'>
            {/* Class Links */}
            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((className, index) => (
              <button  key={index} className="relative flex items-center justify-center m-5 text-white bg-[#000000]
               border-2 border-gray-900 rounded-[50%] w-[120px] h-[120px] cursor-pointer transition-transform transform
                hover:scale-110 hover:bg-slate-800 below-sm:h-[90px] below-sm:w-[90px] ">
                <Link to={`/classes/${className}/subjects`} className="flex items-center justify-center w-full h-full">
                  Class {className}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Classes;
