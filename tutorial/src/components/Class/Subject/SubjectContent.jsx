// SubjectContent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

function SubjectContent() {
  const { className, subjectName, chapterName } = useParams(); // Get class, subject, and chapter from URL parameters

  // Define links to PDFs based on the class, subject, and chapter
  const pdfLinks = {
    "I": {
      "Math": {
        "Chapter 1": "https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/preview",
        "Chapter 2": "https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/view?usp=sharing",
        // Add more chapters as needed
      },
      "Science": {
        "Chapter 1": "https://drive.google.com/file/d/1OYEvlTQt_XCDKfY0lTdlKUujr9ma12hw/view?usp=sharing",
        "Chapter 2": "https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/view?usp=sharing",
        // Add more chapters as needed
      },
    },
    "II": {
      "Math": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_MATH_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_MATH_CLASS_II_CHAPTER_2",
        // Add more chapters as needed
      },
      "Science": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_2",
        // Add more chapters as needed
      },
    },
    "X": {
      "Math": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_MATH_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_MATH_CLASS_II_CHAPTER_2",
        // Add more chapters as needed
      },
      "Science": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_2",
        // Add more chapters as needed
      },
      "SST": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_2",
        "Chapter 3": "https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/preview",
        // Add more chapters as needed
      },
      "English": {
        "Chapter 1": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_1",
        "Chapter 2": "https://drive.google.com/uc?id=YOUR_FILE_ID_FOR_SCIENCE_CLASS_II_CHAPTER_2",
        // Add more chapters as needed
      },
    },
    // Add more classes as needed
  };

  const pdfLink = pdfLinks[className]?.[subjectName]?.[chapterName];

  return (
    <>
    <Navbar/>
     <div style={{ padding: '20px', textAlign: 'center' }} className='h-[90vh] py-5'>
      <h2>{`Class ${className} - ${subjectName} - ${chapterName}`}</h2>
      {pdfLink ? (
        <iframe
          src={pdfLink}
          width="600"
          height="400"
          title={`${subjectName} - ${chapterName} PDF`}
          style={{ border: 'none' }}
        />
      ) : (
        <p>No PDF available for this chapter.</p>
      )}
    </div>
    <Footer/>
    </>
   
  );
}

export default SubjectContent;
