import React from 'react';
import cvImage from '../assets/cv.png';
import Container from './Container';

const CV = () => {
  return (
    <div className='flex items-center'>
      <Container>
        <img className='object-cover  w-screen' src={cvImage} alt="Resume" />
      </Container>
    </div>
  );
}

export default CV