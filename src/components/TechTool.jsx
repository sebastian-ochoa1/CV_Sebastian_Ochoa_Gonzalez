import React from 'react';
import { FullStar, HalfStar, EmptyStar } from 'components/Stars';

const fullStarsFunction = (fStars) => {
  const qStars = new Array([]);
  for (let index = 0; index < fStars; index += 1) {
    qStars.push([<FullStar />]);
  }
  return qStars;
};

const halfStarsFunction = (hStars) => {
  const qStars = new Array([]);
  for (let index = 0; index < hStars; index += 1) {
    qStars.push([<HalfStar />]);
  }
  return qStars;
};

const emptyStarsFunction = (hStars) => {
  const qStars = new Array([]);
  for (let index = 0; index < hStars; index += 1) {
    qStars.push([<EmptyStar />]);
  }
  return qStars;
};

const TechStars = ({ expertise }) => {
  const fullStars = expertise % 2 === 0 ? expertise / 2 : expertise / 2 - 0.5;
  console.log(fullStars);
  const halfStars = expertise % 2 === 0 ? 0 : 1;
  console.log(halfStars);
  const emptyStars = 5 - (fullStars + halfStars);
  console.log(emptyStars);
  return (
    <div className='flex flex-row mt-1 justify-center'>
      {fullStarsFunction(fullStars).map((fullS) => fullS)}
      {halfStarsFunction(halfStars).map((halfS) => halfS)}
      {emptyStarsFunction(emptyStars).map((emptyS) => emptyS)}
    </div>
  );
};

const TechTool = ({ tool, expertise }) => {
  return (
    <div className='flex flex-col w-40 h-cv-50 lg:mx-4'>
      <div className='w-full'>
        <p className=' text-center'>{tool}</p>
      </div>
      <TechStars expertise={expertise} />
    </div>
  );
};

export default TechTool;
