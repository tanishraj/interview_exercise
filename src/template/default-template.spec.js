import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DefaultTemplate } from './default-template';

jest.mock('../shared/header/header', () => ({
  Header: () => <div data-testid='mock-header'>Mock Header</div>,
}));

jest.mock('../shared/footer/footer', () => ({
  Footer: () => <div data-testid='mock-footer'>Mock Footer</div>,
}));

describe('DefaultTemplate Component', () => {
  test('renders Header and Footer', () => {
    const { getByTestId } = render(
      <DefaultTemplate>
        <div>Child Content</div>
      </DefaultTemplate>
    );
    const header = getByTestId('mock-header');
    const footer = getByTestId('mock-footer');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('renders children', () => {
    const { getByText } = render(
      <DefaultTemplate>
        <div>Child Content</div>
      </DefaultTemplate>
    );
    const childContent = getByText('Child Content');
    expect(childContent).toBeInTheDocument();
  });
});
