import React from 'react';

const FullStar = () => {
  return (
    <div>
      <i className='fas fa-star text-cv-color-yellow-1 star' />
    </div>
  );
};

const HalfStar = () => {
  return (
    <div className='flex flex-col'>
      <i className='mb-cv-n-20 fas fa-star-half star text-cv-color-yellow-1 z-30' />
      <i className='fas fa-star star text-cv-color-gray-3 z-20' />
    </div>
  );
};

const EmptyStar = () => {
  return (
    <div>
      <i className='fas fa-star text-cv-color-gray-3 star' />
    </div>
  );
};

export { FullStar, HalfStar, EmptyStar };
