import React from "react";

const Diamond = ({ size }: { size?: string }) => {
  return (
    <div>
      <div className={`relative  ${size}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 transform rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-gray-600 to-gray-300 transform -rotate-45"></div>
      </div>
    </div>
  );
};

export default Diamond;
