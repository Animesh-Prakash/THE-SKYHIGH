import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

function Subjects() {
  const { className } = useParams(); // Get the class name from the URL
  const subjects = ["math", "science", "english", "history", "geography", "art", "physical-education"]; // List of subjects for this class

  return (
    <>
      <Navbar />
      <div className='mt-36'>
        <h1 className='text-4xl font-medium text-center m-10'>Subjects for Class {className.toUpperCase()}</h1>
        <div className='h-[52vh] flex justify-center'>
          <div className='flex justify-evenly flex-wrap w-[60vw]'>
            {subjects.map((subject, index) => (
              <button key={index} className="relative flex items-center justify-center text-white bg-[#000000] border-2 border-gray-900 rounded-[50%] w-[120px] h-[120px] cursor-pointer hover:bg-slate-700">
                <Link to={`/classes/${className.toLowerCase()}/subjects/${subject}`}>{subject.charAt(0).toUpperCase() + subject.slice(1)}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Subjects;
