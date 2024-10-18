// ChapterSelection.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ChapterSelection = () => {
  const { className, subjectName } = useParams();

  const chapters = ["Chapter 1", "Chapter 2", "Chapter 3"]; // Define chapters for the subject

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{`Select a Chapter for Class ${className} - ${subjectName}`}</h1>
      <div>
        {chapters.map((chapter) => (
          <Link to={`/classes/${className}/subjects/${subjectName}/chapters/${chapter}`} key={chapter}>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              {chapter}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChapterSelection;

