// Classes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

function Classes() {
  return (
    <>
      <Navbar />
      <div className='mt-36'>
        <h1 className='text-6xl font-medium text-center m-10'>Explore Our Classes</h1>
        <div className='h-[52vh] flex justify-center'>
          <div className='flex justify-evenly flex-wrap w-[60vw]'>
            {/* Class Links */}
            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((className, index) => (
              <button key={index} className="relative flex items-center justify-center text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px] h-[120px] cursor-pointer hover:bg-slate-700">
                <Link to={`/classes/${className}/subjects`}>Class {className}</Link>
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
