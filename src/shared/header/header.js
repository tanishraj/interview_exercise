import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <div
      className='header-wrapper'
      data-testid='header-wrapper'
    >
      <div
        className='header-container'
        data-testid='header-container'
      >
        <h1>NewYork Times Popular Articles</h1>
      </div>
    </div>
  );
};
