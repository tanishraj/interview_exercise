import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Footer Component', () => {
  test('renders footer text correctly', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(
      '© Copyright 2024 NewYork Times. All rights reserved.'
    );
    expect(footerText).toBeInTheDocument();
  });

  test('renders footer wrapper and container correctly', () => {
    const { getByTestId } = render(<Footer />);
    const footerWrapper = getByTestId('footer-wrapper');
    const footerContainer = getByTestId('footer-container');
    expect(footerWrapper).toBeInTheDocument();
    expect(footerContainer).toBeInTheDocument();
  });
});
