import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script

const Book = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);

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
      <div className='mt-32 h-[100%] mb-8 below-1200:mt-40 below-800:h-[100%] below-1200:m-10'>
        <h1 data-aos="fade-down" className='text-6xl font-semibold text-center m-10 below-500:text-5xl below-500:m-0 below-500:mb-5'>BOOKS AND SOLUTION</h1>
        <div className='h-fit flex justify-center'>
          <div  className='grid grid-cols-2 gap-6 w-[90vw] below-500:flex below-500:flex-col'>
            <button  data-aos='fade-right' data-aos-delay="100"  className="flex items-center justify-center text-white bg-black border-2 border-gray-900 rounded-lg w-full h-[60px] cursor-pointer hover:bg-slate-700">
              <Link to='/books/ncert-solution'>NCERT Solution</Link>
            </button>
            {bookOptions.map((bookOption, index) => (
              <button  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}   data-aos-delay={`${index * 100 + 200}`}  key={index} className="flex items-center justify-center text-white bg-black border-2 border-gray-900 rounded-lg w-full h-[60px] cursor-pointer hover:bg-slate-700">
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
