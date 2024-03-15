import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Header Component', () => {
  test('renders header text correctly', () => {
    const { getByText } = render(<Header />);
    const headerText = getByText('NewYork Times Popular Articles');
    expect(headerText).toBeInTheDocument();
  });

  test('renders header wrapper and container correctly', () => {
    const { getByTestId } = render(<Header />);
    const headerWrapper = getByTestId('header-wrapper');
    const headerContainer = getByTestId('header-container');

    expect(headerWrapper).toBeInTheDocument();
    expect(headerContainer).toBeInTheDocument();
  });
});
