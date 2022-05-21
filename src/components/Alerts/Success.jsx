import React from 'react';

import './success.css';

const Success = ({ children }) => {
  return (
    <div className="success">
      <p>{children}</p>
    </div>
  );
};

export default Success;
