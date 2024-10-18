import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';

const Book = () => {
  const bookOptions = [
    "NCERT Solution",
    "NCERT Notes",
    "NCERT Exemplar Solution",
    "RD-Sharma Solution",
    "Lakhmir Singh Solution",
    "Manjeet Kaur Solution",
    "Xamidea Solution",
    "Oswaal Solution",
    "PS-Grewal Solution",
    "D-K Goel Solution",
    "Ever Green Science Solution",
    "KVS CBSE Worksheet",
    "Topper Handwritten Notes",
    "Sample Paper with Solution",
  ];

  return (
    <>
      <Navbar />
      <div className='mt-36'>
        <h1 className='text-6xl font-semibold text-center m-10'>BOOKS AND SOLUTION</h1>
        <div className='h-[52vh] flex justify-center'>
          <div className='flex justify-evenly flex-wrap w-[90vw]'>
            {/* Book Links */}
            {bookOptions.map((bookOption, index) => (
              <button key={index} className="flex items-center justify-center text-white bg-[#000000] border-2 border-gray-900 rounded-lg w-fit m-3 h-[60px] cursor-pointer px-4 hover:bg-slate-700">
                <Link to='/books/'>{bookOption}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Book;
