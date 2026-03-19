import React from 'react';

const PagePlaceholder = ({ title }) => {
  return (
    <div className="pt-24 pb-16 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">{title}</h1>
      <p className="text-gray-600 text-lg">Content for {title} page is coming soon...</p>
      <div className="mt-8 w-24 h-1 bg-secondary rounded-full animate-pulse"></div>
    </div>
  );
};

export default PagePlaceholder;
