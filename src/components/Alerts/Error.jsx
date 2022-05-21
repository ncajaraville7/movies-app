import React from 'react';

import './error.css';
const Error = ({ children }) => {
  return (
    <div className="error">
      <p>{children}</p>
    </div>
  );
};

export default Error;
