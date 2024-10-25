// ChapterSelection.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

// Helper function to generate chapter names
const generateChapters = (num) => {
  return Array.from({ length: num }, (_, i) => `Chapter ${i + 1}`);
};

const ChapterSelection = () => {
  const { className, subjectName } = useParams();

  // Define chapters based on class and subject
  const chaptersByClassAndSubject = {
    "I": {
      "Math": generateChapters(13),  // 13 chapters
      "English": generateChapters(10),  // 10 chapters
      "Hindi": generateChapters(23),  // 11 chapters (you can adjust the number)
    },
    "II": {
      "Math": generateChapters(15),  // Adjust as needed
      "Hindi": generateChapters(15),
      "Marigold":generateChapters(20),  // Adjust as needed
    },
    "III":{
      "Math":generateChapters(14),
      "Hindi":generateChapters(14),
      "English": generateChapters(20),
      "Paryavaran Adhyayan": generateChapters(24),
      "Looking Around(EVS)": generateChapters(24),
    },
    "IV":{
      "Math":generateChapters(14),
      "Rimjhim":generateChapters(14),
      "Marigold": generateChapters(20),
      "Paryavaran Adhyayan": generateChapters(27),
      "Looking Around(EVS)": generateChapters(27),
    },
    "V":{
      "Math":generateChapters(14),
      "Rimjhim":generateChapters(18),
      "Marigold": generateChapters(20),
      "Paryavaran Adhyayan": generateChapters(22),
      "Looking Around": generateChapters(22),
      "Science": generateChapters(12),
    },
    "VI": {
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
    "VII": {
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
    "VIII": {
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
    "IX": {
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
    "X": {
     "Math": generateChapters(15),  // Example
      "Science": generateChapters(16),  // Example
      "History":generateChapters(8),
      "Political Science":generateChapters(7),
      "Geography":generateChapters(7),
      "Economics":generateChapters(5),
      "Footprints Without Feet": generateChapters(10),
      "First Flight":generateChapters(22),
    },
    "XII":{
      "Physics":generateChapters(15),
      "Maths":generateChapters(13),
      "Chemistry": generateChapters(16),
      "Biology":generateChapters(16),
      
    }
  };

  const chapters = chaptersByClassAndSubject[className]?.[subjectName] || []; // Get chapters based on class and subject

  return (
    <>
    <Navbar/>
     <div className=' h-[55vh] below-800:h-[100%] mt-28' style={{ padding: '20px', textAlign: 'center' }}>
      <h1 className='text-5xl '>{`Select a Chapter for Class ${className} - ${subjectName}`}</h1>
      <div>
        {chapters.length > 0 ? (
          chapters.map((chapter) => (
            <Link to={`/classes/${className}/subjects/${subjectName}/chapters/${chapter}`} key={chapter}>
              <button className="w-[120px] h-[120px] rounded-[50%] bg-black text-white my-5 mx-8 
              cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-800
               text-center below-sm:h-[100px] below-sm:w-[100px]">
                {chapter}
              </button>
            </Link>
          ))
        ) : (
          <p>No chapters available for this subject.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ChapterSelection;
