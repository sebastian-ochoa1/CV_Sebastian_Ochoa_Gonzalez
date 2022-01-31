import React from 'react';

const H1withText = ({ tittle, children, mg }) => {
  return (
    <div className={mg}>
      <h1 className='h1-magenta-3 h-cv-35 text-center md:text-left'>
        {tittle}
      </h1>
      <p className='mt-4 md:ml-8 lg:ml-14 text-center md:text-left'>
        {children}
      </p>
      <div className='h-1 md:h-3' />
    </div>
  );
};

export default H1withText;
