import React from 'react';

const H2withText = ({ tittle, text, mg }) => {
  return (
    <div className={mg}>
      <h2 className='h2-cian-2 h-cv-35'>{tittle}</h2>
      <p className='h-6 w-cv-350 mt-1 ml-3'>{text}</p>
    </div>
  );
};

export default H2withText;
