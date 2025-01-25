import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import solution from './img/solution.jpg'
import kvs from './img/kvs.jpg'
import notes from './img/notes.jpg'
import sample from './img/sample.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script

const CBSE = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center mt-36 mb-5'>
      <div data-aos="zoom-in-up" className='h-[200px] w-[90vw] bg-slate-400 flex items-center justify-center text-3xl font-medium '>CBSE</div>
      <div  className='w-[90vw] my-28 below-1200:my-14'>
        <div data-aos="fade-down">
        <h1  className='text-center text-5xl font-semibold below-800:text-4xl'>What We Offer</h1>
        <p  className='text-center font-semibold below-800:text-sm'>Discover the array of educational services aimed at enhancing your learning experience.</p>
        </div>  
        <div className='flex justify-around mt-12 flex-wrap'>
          <div data-aos="flip-right"  className='h-[500px] w-[250px] mx-2 flex flex-col gap-3'>
           <a href="http://localhost:5173/books/ncert-solution"><img src={solution} alt=""  className='h-[250px] transition-transform transform
                hover:scale-110 '/></a> 
            <a href="http://localhost:5173/books/ncert-solution"><h1 className='text-2xl underline font-semibold '>NCERT SOLUTION</h1></a>
            <p>Our NCERT solutions provide clear, step-by-step explanations for textbook
               questions, helping students grasp concepts effectively and excel in their studies.</p>
          </div>
          <div data-aos="flip-right" className='h-[500px] w-[250px] mx-2 flex flex-col gap-3'>
           <a href="http://localhost:5173/books/NCERT%20Notes"><img src={notes} alt=""  className='h-[250px] transition-transform transform
                hover:scale-110 '/></a> 
           <a href="http://localhost:5173/books/NCERT%20Notes"><h1 className='text-2xl underline font-semibold'  >NCERT NOTES</h1></a>
            <p>Our CBSE notes simplify complex topics, highlighting key concepts and formulas for efficient 
              revision, helping students excel in their studies.</p>
          </div>
          <div data-aos="flip-right" className='h-[500px] w-[250px] mx-2 flex flex-col gap-3'>
           <a href="http://localhost:5173/books/Sample%20Paper%20with%20Solution"><img src={sample} alt=""  className='h-[250px] transition-transform transform
                hover:scale-110 '/></a> 
           <a href="http://localhost:5173/books/Sample%20Paper%20with%20Solution"><h1 className='text-2xl underline font-semibold'  >SAMPLE PAPER</h1></a>
            <p>Our sample papers are designed to simulate real exam conditions,
               offering a variety of questions with detailed solutions to enhance
                students' preparation and confidence.</p>
          </div>
          <div data-aos="flip-right" className='h-[500px] w-[250px] mx-2 flex flex-col gap-3'>
           <a href="http://localhost:5173/books/KVS%20CBSE%20Worksheet"> <img src={kvs} alt="" className='h-[250px] transition-transform transform
                hover:scale-110 ' /></a>
            <a href="http://localhost:5173/books/KVS%20CBSE%20Worksheet"><h1 className='text-2xl underline font-semibold'>KVS WORKSHEET</h1></a>
            <p>KVS worksheets are tailored to reinforce learning, featuring
               diverse question types that challenge students and enhance their
                understanding of key concepts.</p>
          </div>
        </div>
        <button className='bg-red-600 p-3 border-[1px] border-black rounded-xl ml-5 transition-all hover:bg-red-400 cursor-pointer transition-transform transform hover:scale-110'><Link to='/cbse/books'>Learn more</Link></button>

      </div>
      <div className='flex flex-col w-[90vw]'>
      <ul data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='flex flex-col gap-1 mb-8'>
        <li>
          <img src="" alt="" />
          <span>NCERT SOUTION</span>
        </li>
        <li>
          <img src="" alt="" />
          <span>NCERT NOTES</span>
        </li> 
        <li>
          <img src="" alt="" />
          <span>SAMPLE PAPER</span>
        </li>
        <li>
          <img src="" alt="" />
          <span>KVS CBSE WORKSHEET</span>
        </li>
      </ul>
      <p data-aos="fade-left" data-aos-offset="200" className='my-2 font-medium'>Our website is a one-stop destination for students seeking to excel in their CBSE examinations.
         The NCERT solutions are meticulously crafted to align with the official textbooks, providing
          clear, structured answers that break down complex concepts into manageable parts. Each solution
           emphasizes critical thinking and problem-solving techniques, fostering a deeper understanding
            of the subject matter.</p>
            <p data-aos="fade-right" data-aos-offset="200" className='my-2 font-medium'>In addition to these solutions, our NCERT notes serve as an invaluable study aid.
               They highlight key points, definitions, and formulas, ensuring that students can quickly 
               recall essential information during their revision sessions. These notes are designed to
                cater to different learning styles, making it easier for visual learners to grasp intricate
                 topics.</p>
            <p data-aos="fade-left" data-aos-offset="200" className='my-2 font-medium'>The CBSE worksheets available on our site offer a diverse range of questions, from multiple-choice
               to descriptive answers, encouraging students to apply their knowledge practically. These worksheets 
               not only reinforce classroom learning but also prepare students for the types of questions 
               they might encounter in exams.</p>
               <p data-aos="fade-right" data-aos-offset="200" className='my-2 font-medium'>Furthermore, our sample papers come equipped with detailed solutions, allowing students
                 to practice under exam-like conditions. By working through these papers, learners can assess
                  their strengths and weaknesses, refine their time management skills, and gain confidence in
                   their ability to tackle the actual exam.</p>
                   <p data-aos="fade-left" data-aos-offset="200" className='my-2 font-medium'>Overall, our resources are designed to provide a holistic approach to learning,
                     equipping students with the tools they need to succeed academically while fostering 
                     a love for knowledge and critical inquiry. Whether it’s through interactive worksheets, 
                     concise notes, or comprehensive solutions, we are committed to supporting every learner’s
                      journey toward academic excellence.</p>
      </div>
      </div>
     <Footer/>
      
    
    </>
  )
}

export default CBSE
