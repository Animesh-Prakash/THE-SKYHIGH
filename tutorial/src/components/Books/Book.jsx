import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';

const Book = () => {
  const bookOptions = [
    "NCERT Notes",
    "NCERT Exempler Solution",
    "RD-Sharma Solution",
    "Lakhmir Singh and Manjeet Kaur Solution",
    "Xamidea Solution",
    "Oswaal Solution",
    "TS-Grewal Solution",
    "DK Goel Solution",
    "KVS CBSE Worksheet",
    "Topper Handwritten Notes",
    "Sample Paper with Solution",
  ];

  return (
    <>
      <Navbar />
      <div className='mt-36 h-[35vh] below-1200:mt-40 below-800:h-[100%] below-1200:m-10'>
        <h1 className='text-6xl font-semibold text-center m-10'>BOOKS AND SOLUTION</h1>
        <div className='h-fit flex justify-center'>
          <div className='flex justify-evenly flex-wrap w-[90vw]'>
          <button  className="flex items-center justify-center text-white bg-black border-2 border-gray-900 rounded-lg w-fit m-3 h-[60px] cursor-pointer px-4 hover:bg-slate-700">
<Link to='/books/ncert-solution'>NCERT Solution</Link>
</button>
            {bookOptions.map((bookOption, index) => (
              <button key={index} className="flex items-center justify-center text-white bg-black border-2 border-gray-900 rounded-lg w-fit m-3 h-[60px] cursor-pointer px-4 hover:bg-slate-700">
                <Link to={`/books/${encodeURIComponent(bookOption)}`}>{bookOption}</Link>
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

