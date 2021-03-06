import React from 'react';

const Footer = ({ children }) => {
  return (
    <div className='flex flex-row bg-cv-color-gray-2 h-cv-300 fixed bottom-0 inset-x-0 ml-cv-484'>
      {children}
    </div>
  );
};

export default Footer;
