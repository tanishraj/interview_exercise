import React from 'react';
import { renderWithRouter } from './utils/test-utils/renderWithRouter';
import '@testing-library/jest-dom';
import { App } from './App';

jest.mock('./template/default-template', () => ({
  DefaultTemplate: ({ children }) => (
    <div data-testid='default-template'>{children}</div>
  ),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div data-testid='mock-outlet'>Mock Outlet</div>,
}));

describe('App Component', () => {
  test('renders DefaultTemplate', () => {
    const { getByTestId } = renderWithRouter(<App></App>);
    const defaultTemplate = getByTestId('default-template');
    expect(defaultTemplate).toBeInTheDocument();
  });

  test('renders Outlet inside DefaultTemplate', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const outlet = getByTestId('mock-outlet');
    expect(outlet).toBeInTheDocument();
  });
});
