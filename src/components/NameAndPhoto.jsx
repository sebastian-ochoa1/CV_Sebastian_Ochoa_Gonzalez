import React from 'react';

const NameAndPhoto = () => {
  return (
    <div>
      <div className='h-cv-300 w-cv-300'>
        <img
          src='resources/Photo.jpeg'
          alt='No profile pic'
          className='rounded-full border border-cv-color-magenta-1 mt-cv-mg-44 md:mt-cv-60 '
        />
      </div>
      <div className=' flex flex-col mt-cv-60 items-center'>
        <h1 className=' h1-magenta-2'>Sebastian Ochoa</h1>
        <h1 className=' h1-magenta-2'>Gonzalez</h1>
      </div>
    </div>
  );
};

export default NameAndPhoto;
