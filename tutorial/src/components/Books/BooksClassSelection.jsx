import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const BooksClassSelection = () => {
  const { bookName } = useParams();

  // Define the available classes and if subject selection is required
  const classMapping = {
    "NCERT Notes": { classes: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'], requiresSubject: true }, //Done
    "NCERT Exempler Solution":{classes: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'] ,requiresSubject:true}, //Done
    "RD-Sharma Solution": { classes: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'], requiresSubject: true }, //Done
    "Lakhmir Singh and Manjeet Kaur Solution": { classes: ['Class 8', 'Class 9', 'Class 10'], requiresSubject: true }, //Done
    "Xamidea Solution":{classes:['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'], requiresSubject:true}, //Done
    "Oswaal Solution":{classes:['Class 10','Class 12'], requiresSubject:true}, //Done
    "TS-Grewal Solution":{classes:['Class 11','Class 12'],requiresSubject:true}, //Done
    "DK Goel Solution":{classes:['Class 11','Class 12'],requiresSubject:true},  //Done
    "KVS CBSE Worksheet":{classes:['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5','Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'],requiresSubject:true}, //Done
    "Sample Paper with Solution":{classes:['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10','Class 12'],requiresSubject:true},


    // Add mappings for other books here
  };

  const classes = classMapping[bookName]?.classes || [];
  const requiresSubject = classMapping[bookName]?.requiresSubject || false;

  return (
    <>
    <Navbar/>
    <div className='mt-36 below-lg:mt-28 h-[55vh] below-600:h-[62vh]'>
      <h1 className='text-4xl font-semibold text-center'>Select Class for {bookName}</h1>
      <div className='flex justify-evenly flex-wrap'>
        {classes.length > 0 ? (
          classes.map((className, index) => (
            <button key={index} className="w-[120px] h-[120px] rounded-[50%] bg-black text-white my-5 mx-8 cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-800 text-center below-ls:w-[100px] below-ls:h-[100px] below-ls:mx-5">
              <Link to={`/books/${encodeURIComponent(bookName)}/${encodeURIComponent(className)}`}>
                {className}
              </Link>
            </button>
          ))
        ) : (
          <p>No classes available for this book.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default BooksClassSelection;
