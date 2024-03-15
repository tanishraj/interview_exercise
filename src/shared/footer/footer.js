import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <div
      className='footer-wrapper'
      data-testid='footer-wrapper'
    >
      <div
        className='footer-container'
        data-testid='footer-container'
      >
        <p>© Copyright 2024 NewYork Times. All rights reserved.</p>
      </div>
    </div>
  );
};
