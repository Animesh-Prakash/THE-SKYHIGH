import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization script

const SubjectSelection = () => {
  const { bookName, className } = useParams();
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether the animation should happen only once
    });
  }, []);
  // Define the available subjects for each book and class
  const subjectMapping = {
    "Lakhmir Singh and Manjeet Kaur Solution": {
      'Class 8': ['Science'],
      'Class 9': ['Physics', 'Chemistry', 'Biology'],
      'Class 10': ['Physics', 'Chemistry', 'Biology'],
     
    },
    "NCERT Notes":{
        "Class 6": ["Math","Honeysuckle","A Pact With The Sun","Science","Durva","Vasant","Sanskrit","History","Civics","Geography"],
    "Class 7": ["Math","Honeycomb","An Alien Hand","Science","Vasant","Sanskrit","Our Past II","Social & Political Life II","Our ENvironment"],
    "Class 8": ["Math","Honetdew","It So Happened","Science","Vasant III","Ruchira","Sanskrit","Our Past III","Social & Political Life III","Resources and Development"],
    "Class 9": ["Math","Beehive","Moments","Science","Kshitiz","Kritika","Sanskrit","History","Political Science","Geography","Economics"],
    "Class 10": ["Math","First Flight","Footprints Without Feet","Science","History","Political Science","Geography","Economics"],
    "Class 12":["Physics","Chemistry","Biology","Maths"],
    },
    "NCERT Exempler Solution":{
        "Class 6": ["Math","Science"],
        "Class 7": ["Math",'Science'],
        "Class 8": ["Math",'Science'],
        "Class 9": ["Math",'Science'],
        "Class 10": ["Math",'Science'],
        "Class 12":["Physics","Chemistry","Biology","Math"],
    },
    "Xamidea Solution":{
        "Class 6": ["Math","History",'Civics','Geography'],
        "Class 7": ["Math","History",'Civics','Geography'],
        "Class 8": ["Math","History",'Civics','Geography'],
        "Class 9": ["Math",'Science',"History",'Civics','Geography','Economics'],
        "Class 10": ["Math",'Science',"History",'Civics','Geography','Economics'],
        "Class 12":["Physics","Chemistry","Biology","Maths"],
    },
    "RD-Sharma Solution":{
      "Class 6": ["Math"],
      "Class 7": ["Math"],
      "Class 8": ["Math"],
      "Class 9": ["Math"],
      "Class 10": ["Math"],
      "Class 12":['Math'],
    },
    "Oswaal Solution":{
      'Class 10':['Math','Science','Economics','History','Political Science','Geography'],
      'Class 12':['Biology'],
    },
    "TS-Grewal Solution":{
      'Class 11':['Accounting'],
      'Class 12':['Accounting'],
    },
    "DK Goel Solution":{
      'Class 11':['Accounts'],
      'CLass 12':['Accounts-I', 'Accounts-II'],
    },
    "KVS CBSE Worksheet":{
      "Class 1": ["Math", "English","Hindi"],
      "Class 2": ["Math", "Hindi","Marigold"],
      "Class 3": ["Math", "Hindi","English","Paryavaran Adhyayan","Looking Around(EVS)"],
      "Class 4": ["Math", "Rimjhim","Marigold","Paryavaran Adhyayan","Looking Around(EVS)"],
      "Class 5": ["Math", "Rimjhim","Marigold","Paryavaran Adhyayan","Looking Around","Science"],
      "Class 6": ["Math","Honeysuckle","A Pact With The Sun","Science","Durva","Vasant","Sanskrit","History","Civics","Geography"],
      "Class 7": ["Math","Honeycomb","An Alien Hand","Science","Vasant","Sanskrit","Our Past II","Social & Political Life II","Our ENvironment"],
      "Class 8": ["Math","Honetdew","It So Happened","Science","Vasant III","Ruchira","Sanskrit","Our Past III","Social & Political Life III","Resources and Development"],
      "Class 9": ["Math","Beehive","Moments","Science","Kshitiz","Kritika","Sanskrit","History","Political Science","Geography","Economics"],
      "Class 10": ["Math","First Flight","Footprints Without Feet","Science","History","Political Science","Geography","Economics"],
      "Class 12":["Physics","Chemistry","Biology","Maths"],
    },
    "Sample Paper with Solution":{
      "Class 6": ["Math","Honeysuckle","A Pact With The Sun","Science","Durva","Vasant","Sanskrit","History","Civics","Geography"],
      "Class 7": ["Math","Honeycomb","An Alien Hand","Science","Vasant","Sanskrit","Our Past II","Social & Political Life II","Our ENvironment"],
      "Class 8": ["Math","Honetdew","It So Happened","Science","Vasant III","Ruchira","Sanskrit","Our Past III","Social & Political Life III","Resources and Development"],
      "Class 9": ["Math","Beehive","Moments","Science","Kshitiz","Kritika","Sanskrit","History","Political Science","Geography","Economics"],
      "Class 10": ["Math","First Flight","Footprints Without Feet","Science","History","Political Science","Geography","Economics"],
      "Class 12":["Physics","Chemistry","Biology","Maths"],
    },
  };

  const subjects = subjectMapping[bookName]?.[className] || [];

  return (
    <>
    <Navbar/>
     <div className='mt-32  below-lg:mt-32 md:h-[60vh] mb-8 below-800:h-[100%] below-800:mb-36 '>
      <h1 data-aos="fade-down" className='text-4xl font-semibold text-center'>Select Subject for {bookName} - {className}</h1>
      <div data-aos="zoom-out-up" className='flex justify-evenly flex-wrap'>
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <button key={index} className="w-[120px] h-[120px] rounded-[50%] bg-black text-white my-5 mx-8 cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-800 text-center">
              <Link to={`/books/${encodeURIComponent(bookName)}/${encodeURIComponent(className)}/${encodeURIComponent(subject)}`}>
                {subject}
              </Link>
            </button>
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

export default SubjectSelection;
