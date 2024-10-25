// SubjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

const SubjectDetails = () => {
  const { className } = useParams();

  // Define subjects based on class
  const subjectsByClass = {
    "I": ["Math", "English","Hindi"],
    "II": ["Math", "Hindi","Marigold"],
    "III": ["Math", "Hindi","English","Paryavaran Adhyayan","Looking Around(EVS)"],
    "IV": ["Math", "Rimjhim","Marigold","Paryavaran Adhyayan","Looking Around(EVS)"],
    "V": ["Math", "Rimjhim","Marigold","Paryavaran Adhyayan","Looking Around","Science"],
    "VI": ["Math","Honeysuckle","A Pact With The Sun","Science","Durva","Vasant","Sanskrit","History","Civics","Geography"],
    "VII": ["Math","Honeycomb","An Alien Hand","Science","Vasant","Sanskrit","Our Past II","Social & Political Life II","Our ENvironment"],
    "VIII": ["Math","Honetdew","It So Happened","Science","Vasant III","Ruchira","Sanskrit","Our Past III","Social & Political Life III","Resources and Development"],
    "IX": ["Math","Beehive","Moments","Science","Kshitiz","Kritika","Sanskrit","History","Political Science","Geography","Economics"],
    "X": ["Math","First Flight","Footprints Without Feet","Science","History","Political Science","Geography","Economics"],
    "XII":["Physics","Chemistry","Biology","Maths"],
    // Add more classes as needed
  };

  const subjects = subjectsByClass[className] || []; // Get subjects for the selected class

  return (
    <>
    <Navbar/>
    <div className='h-[55vh] below-800:h-[105vh]' style={{ padding: '20px', textAlign: 'center', marginTop: '100px', }}>
<h1 className='text-5xl'>{`Select a Subject for Class ${className}`}</h1>
<div className='flex justify-evenly  flex-wrap '>
  {subjects.length > 0 ? (
    subjects.map((subject) => (
      <Link to={`/classes/${className}/subjects/${subject}/chapters`} key={subject}>
        <button className="w-[120px] h-[120px] rounded-[50%] bg-black text-white my-5 mx-8 cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-800 text-center below-sm:h-[100px] below-sm:w-[100px]">
          {subject}
        </button>
      </Link>
    ))
  ) : (
    <p>No subjects available for this class.</p>
  )}
</div>
</div>
<Footer/>
    </>
    
  );
};

export default SubjectDetails;
