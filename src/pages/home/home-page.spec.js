import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from './home-page';

jest.mock('../../components/article-list/article-list', () => ({
  ArticleList: () => (
    <div data-testid='mock-article-list'>Mock Article List</div>
  ),
}));

describe('HomePage Component', () => {
  test('renders ArticleList component', () => {
    render(<HomePage />);

    expect(screen.getByTestId('mock-article-list')).toBeInTheDocument();
  });
});
