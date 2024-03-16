import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/test-utils/renderWithRouter';
import { App } from './App';
import '@testing-library/jest-dom';

test('renders the root component with a mocked AppRouter', () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId('header-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('header-container')).toBeInTheDocument();
});
