import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(16).fill("").map((_, index) => (
        <div
          key={index}
          className="w-64 h-80 bg-gray-200 rounded-lg shimmer"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
