// SubjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SubjectDetails = () => {
  const { className } = useParams();

  const subjects = ["Math", "Science","SST","English"]; // Define subjects for the class

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{`Select a Subject for Class ${className}`}</h1>
      <div>
        {subjects.map((subject) => (
          <Link to={`/classes/${className}/subjects/${subject}/chapters`} key={subject}>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              {subject}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectDetails;
