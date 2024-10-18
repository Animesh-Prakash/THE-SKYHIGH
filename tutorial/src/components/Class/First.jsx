// First.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const First = () => {
  const { className } = useParams(); // Get class name from URL parameters

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Class {className}</h1>
      <p>Explore the subjects and resources available for Class {className}!</p>
      <Link to={`/classes/${className}/subjects`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Subjects</button>
      </Link>
      <Link to="/classes">
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Back to Classes</button>
      </Link>
    </div>
  );
};

export default First;
