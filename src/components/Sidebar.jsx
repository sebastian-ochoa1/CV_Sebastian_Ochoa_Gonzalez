import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div
      className='flex-sidebar bg-cv-color-gray-1 rounded-b-2xl h-cv-540
      md:h-cv-870
      lg:left-0 lg:rounded-r-2xl lg:h-screen lg:w-cv-500 lg:rounded-l-none'
    >
      {children}
    </div>
  );
};

export default Sidebar;