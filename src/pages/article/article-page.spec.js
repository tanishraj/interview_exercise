import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArticlePage } from './article-page';

jest.mock('../../components/article-details/article-details', () => ({
  ArticleDetails: () => (
    <div data-testid='mock-article-details'>Mock Article Details</div>
  ),
}));

describe('ArticlePage Component', () => {
  test('renders ArticleDetails component', () => {
    render(<ArticlePage />);
    expect(screen.getByTestId('mock-article-details')).toBeInTheDocument();
  });
});
