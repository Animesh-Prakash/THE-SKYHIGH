import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script
import { useEffect } from 'react';

const BooksChapterSelection = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);
  const { bookName, className, subject } = useParams();
  const generateChapters = (num) => {
    return Array.from({ length: num }, (_, i) => `Chapter ${i + 1}`);
  };
  // Define chapters for each book, class, and subject (if subject is required)
  const chapterMapping = {
    "NCERT Notes": {
     'Class 6':{
       "Math": generateChapters(14),  // Example
      "Science": generateChapters(16),  
      "History":generateChapters(12),
      "Civics":generateChapters(9),
      "Geography":generateChapters(8),
      "Honeysuckle": generateChapters(10),
      "A Pact With The Sun":generateChapters(10),
       "Durva":generateChapters(28),
       "Vasant":generateChapters(17),
       "Sanskrit":generateChapters(15),
     },
     'Class 7':{
        "Math": generateChapters(15),  // Example
        "Science": generateChapters(18),  // Example
        "Our Past II":generateChapters(10),
        "Social & Political Life II":generateChapters(9),
        "Our Environment":generateChapters(10),
        "Honeycomb": generateChapters(19),
        "An Alien Hand":generateChapters(10),
         "Vasant":generateChapters(20),
         "Sanskrit":generateChapters(15),
     },
     'Class 8':{
        "Math": generateChapters(16),  // Example
        "Science": generateChapters(18),  // Example
        "Our Past III":generateChapters(12),
        "Social & Political Life III":generateChapters(10),
        "Resources and Development":generateChapters(6),
        "Honeydew": generateChapters(18),
        "It So Happened":generateChapters(10),
         "Vasant":generateChapters(18),
         "Ruchira":generateChapters(15),
         "Sanskrit":generateChapters(14),
     },
     'Class 9':{
        "Math": generateChapters(15),  // Example
        "Science": generateChapters(15),  // Example
        "History":generateChapters(8),
        "Political Science":generateChapters(5),
        "Geography":generateChapters(6),
        "Economics":generateChapters(4),
        "Moments": generateChapters(10),
        "Beehive":generateChapters(20),
         "Kshitiz":generateChapters(17),
         "Kritika":generateChapters(5),
         "Sanskrit":generateChapters(14),
     },
     'Class 10':{
        "Math": generateChapters(15),  // Example
        "Science": generateChapters(16),  // Example
        "History":generateChapters(8),
        "Political Science":generateChapters(7),
        "Geography":generateChapters(7),
        "Economics":generateChapters(5),
        "Footprints Without Feet": generateChapters(10),
        "First Flight":generateChapters(22),
     },
     'Class 12':{
        "Physics":generateChapters(15),
      "Maths":generateChapters(13),
      "Chemistry": generateChapters(16),
      "Biology":generateChapters(16),
     }
    },
    "NCERT Exempler Solution":{
      'Class 6':{
        'Science':generateChapters(16),
        'Math':generateChapters(9),
      },
      'Class 7':{
        'Science':generateChapters(16),
        'Math':generateChapters(12),
      },
      'Class 8':{
        'Science':generateChapters(18),
        'Math':generateChapters(13),
      },
      'Class 9':{
        'Science':generateChapters(15),
        'Math':generateChapters(14),
      },
      'Class 10':{
        'Science':generateChapters(16),
        'Math':generateChapters(13),
      },
      'Class 12':{
        'Physics':generateChapters(15),
        'Chemistry':generateChapters(16),
        'Biology':generateChapters(16),
        'Math':generateChapters(13),
      }
    },
    "Lakhmir Singh and Manjeet Kaur Solution": {
        'Class 8':{
            'Science':generateChapters(18),
        },
      'Class 9': {
        'Physics': generateChapters(5),
        'Chemistry': generateChapters(4),
        'Biology': generateChapters(6),
      },
      'Class 10': {
        'Physics': generateChapters(6),
        'Chemistry': generateChapters(5),
        'Biology': generateChapters(6),
      },
    },
    "Xamidea Solution":{
        'Class 6':{
            'Science':generateChapters(16),
            'History':generateChapters(12),
            'Geography': generateChapters(8),
            'Civics':generateChapters(9),
        },
        'Class 7':{
            'Science':generateChapters(17),
            'History':generateChapters(10),
            'Geography': generateChapters(10),
            'Civics':generateChapters(10),
        },
        'Class 8':{
            'Science':generateChapters(18),
            'History':generateChapters(12),
            'Geography': generateChapters(6),
            'Civics':generateChapters(10),
        },
        'Class 9':{
            'Science':generateChapters(16),
            'History':generateChapters(5),
            'Geography': generateChapters(6),
            'Civics':generateChapters(5),
            'Maths':generateChapters(15),
            'Economics':generateChapters(4),
        },
        'Class 10':{
            'Science':generateChapters(16),
            'History':generateChapters(8),
            'Geography': generateChapters(6),
            'Civics':generateChapters(8),
            'Maths':generateChapters(15),
            'Economics':generateChapters(5),
        },
      'Class 12':{
        'Physics':generateChapters(15),
        'Maths':generateChapters(14),
        'Chemistry':generateChapters(16),
        'Biology':generateChapters(16),
      },
    },
    "TS-Grewal Solution":{
        'Class 11':generateChapters(33),
        'Class 12':generateChapters(25),
    },
    "RD-Sharma Solution":{
       'Class 6':{
        'Math':generateChapters(23),
       },
       'Class 7':{
        'Math':generateChapters(25),
       },
       'Class 8':{
        'Math':generateChapters(27),
       },
       'Class 9':{
        'Math':generateChapters(25),
       },
       'Class 10':{
        'Math':generateChapters(16),
       },
       'Class 12':{
        'Math':generateChapters(33),
       },
    },
    "Oswaal Solution":{
      'Class 10':{
        'Math':generateChapters(15),
        'Science':generateChapters(16),
        'History': generateChapters(8),
        'Political Science':generateChapters(7),
        'Geography':generateChapters(6),
        'Economics':generateChapters(5),
      },
      'Class 12':{
        'Biology':generateChapters(16),
      }
    },
    "TS-Grewal Solution":{
      'Class 11':{
        'Accounting':generateChapters(33),
      },
      'Class 12':{
        'Accounting':generateChapters(16),
      },
    },
    "DK Goel Solution":{
      'Class 11':{
        'Accounts':generateChapters(28),
      },
      'Class 12':{
        'Accounts-I':generateChapters(15),
        'Accounts-II':generateChapters(9),
      }
    },
    "KVS CBSE Worksheet":{
      "Class 1": {
        "Math": generateChapters(13),  // 13 chapters
        "English": generateChapters(10),  // 10 chapters
        "Hindi": generateChapters(23),  // 11 chapters (you can adjust the number)
      },
      "Class 2": {
        "Math": generateChapters(15),  // Adjust as needed
        "Hindi": generateChapters(15),
        "Marigold":generateChapters(20),  // Adjust as needed
      },
      "Class 3":{
        "Math":generateChapters(14),
        "Hindi":generateChapters(14),
        "English": generateChapters(20),
        "Paryavaran Adhyayan": generateChapters(24),
        "Looking Around(EVS)": generateChapters(24),
      },
      "Class 4":{
        "Math":generateChapters(14),
        "Rimjhim":generateChapters(14),
        "Marigold": generateChapters(20),
        "Paryavaran Adhyayan": generateChapters(27),
        "Looking Around(EVS)": generateChapters(27),
      },
      "Class 5":{
        "Math":generateChapters(14),
        "Rimjhim":generateChapters(18),
        "Marigold": generateChapters(20),
        "Paryavaran Adhyayan": generateChapters(22),
        "Looking Around": generateChapters(22),
        "Science": generateChapters(12),
      },
      "Class 6": {
        "Math": generateChapters(14),  // Example
        "Science": generateChapters(16),  // Example
        "History":generateChapters(12),
        "Civics":generateChapters(9),
        "Geography":generateChapters(8),
        "Honeysuckle": generateChapters(10),
        "A Pact With The Sun":generateChapters(10),
         "Durva":generateChapters(28),
         "Vasant":generateChapters(17),
         "Sanskrit":generateChapters(15),
      },
      "Class 7": {
        "Math": generateChapters(15),  // Example
        "Science": generateChapters(18),  // Example
        "Our Past II":generateChapters(10),
        "Social & Political Life II":generateChapters(9),
        "Our Environment":generateChapters(10),
        "Honeycomb": generateChapters(19),
        "An Alien Hand":generateChapters(10),
         "Vasant":generateChapters(20),
         "Sanskrit":generateChapters(15),
      },
      "Class 8": {
        "Math": generateChapters(16),  // Example
        "Science": generateChapters(18),  // Example
        "Our Past III":generateChapters(12),
        "Social & Political Life III":generateChapters(10),
        "Resources and Development":generateChapters(6),
        "Honeydew": generateChapters(18),
        "It So Happened":generateChapters(10),
         "Vasant":generateChapters(18),
         "Ruchira":generateChapters(15),
         "Sanskrit":generateChapters(14),
      },
      "CLass 9": {
        "Math": generateChapters(15),  // Example
        "Science": generateChapters(15),  // Example
        "History":generateChapters(8),
        "Political Science":generateChapters(5),
        "Geography":generateChapters(6),
        "Economics":generateChapters(4),
        "Moments": generateChapters(10),
        "Beehive":generateChapters(20),
         "Kshitiz":generateChapters(17),
         "Kritika":generateChapters(5),
         "Sanskrit":generateChapters(14),
      },
      "Class 10": {
       "Math": generateChapters(15),  // Example
        "Science": generateChapters(16),  // Example
        "History":generateChapters(8),
        "Political Science":generateChapters(7),
        "Geography":generateChapters(7),
        "Economics":generateChapters(5),
        "Footprints Without Feet": generateChapters(10),
        "First Flight":generateChapters(22),
      },
      "Class 12":{
        "Physics":generateChapters(15),
        "Maths":generateChapters(13),
        "Chemistry": generateChapters(16),
        "Biology":generateChapters(16),
        
      },
    },
    // Add other mappings for books
  };

 const chapters = chapterMapping[bookName]?.[className]?.[subject] || [];
  return (
    <>
    <Navbar/>
     <div className=' below-lg:mt-28 h-[100%]  below-1200:mt-32'>
      <h1 data-aos="fade-down" className='text-4xl font-semibold text-center'>
        {subject ? `Select Chapter for ${bookName} - ${className} - ${subject}` : `Select Chapter for ${bookName} - ${className}`}
      </h1>
      <div data-aos="zoom-out-up" className='flex justify-evenly flex-wrap '>
        {chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <button key={index} className="w-[120px] h-[120px] rounded-[50%] bg-black text-white my-5 mx-8 cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-800 text-center below-ls:w-[100px] below-ls:h-[100px] below-ls:mx-5">
              <Link to={`/books/${encodeURIComponent(bookName)}/${encodeURIComponent(className)}/${subject ? encodeURIComponent(subject) + '/' : ''}${encodeURIComponent(chapter)}`}>
                {chapter}
              </Link>
            </button>
          ))
        ) : (
          <p>No chapters available for this selection.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default BooksChapterSelection;
