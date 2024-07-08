import React from 'react';

export const SkeletonProduct = () => {
  return (
    <div className="animate-pulse flex flex-col items-center bg-gray-500 p-4 rounded-lg">
      <div className="w-64 h-40 bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-48 h-6 bg-gray-300 rounded-lg mb-2"></div>
      <div className="w-32 h-6 bg-gray-300 rounded-lg mb-2"></div>
      <div className="w-24 h-6 bg-gray-300 rounded-lg"></div>
    </div>
  );
};