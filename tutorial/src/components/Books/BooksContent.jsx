import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const BooksContent = () => {
  const { bookName, className, subject, chapter } = useParams();

  // Define the mapping of PDFs for each book, class, subject, and chapter
  const pdfMapping = {
    "NCERT Notes": {
      'Class 6': {
        'Math': {
          'Chapter 1': 'https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/preview',
          'Chapter 2': 'https://drive.google.com/file/d/your-pdf-id-2/preview',
        },
      },
    },
    "Lakhmir Singh and Manjeet Kaur Solution": {
      'Class 6': {
        'Physics': {
          'Chapter 1': 'https://drive.google.com/file/d/your-pdf-id-3/preview',
          'Chapter 2': 'https://drive.google.com/file/d/your-pdf-id-4/preview',
        },
        'Chemistry': {
          'Chapter 1': 'https://drive.google.com/file/d/your-pdf-id-5/preview',
        },
      },
    },
    "TS-Grewal Solution": {
      'Class 11': {
        "Chapter 1": 'https://drive.google.com/file/d/1B7LhVpVj39C8MrMWkhBvw4nGclt9-gG6/preview',
      },
    },
  };

  const pdfLink = subject
    ? pdfMapping[bookName]?.[className]?.[subject]?.[chapter] || ''
    : pdfMapping[bookName]?.[className]?.[chapter] || '';

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .pdf-container {
        position: relative;
        width: 80%;
        height: 90vh; /* Adjust height as needed */
        overflow: auto; /* Allow scrolling */
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none; /* Remove border */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh] my-5">
        {pdfLink ? (
          <div className="pdf-container">
            <iframe
              src={pdfLink}
              title={`${bookName} - ${className} - ${subject || ''} - ${chapter}`}
              scrolling="auto" // Enable scrolling
            ></iframe>
          </div>
        ) : (
          <p>No PDF available for this selection.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BooksContent;
