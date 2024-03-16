import React from 'react';
import { renderWithRouter } from '../../utils/test-utils/renderWithRouter';
import '@testing-library/jest-dom';

import { ArticleList } from './article-list';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('ArticleList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders article items correctly', () => {
    const mockArticleList = {
      results: [
        {
          id: 1,
          title: 'Article 1',
          abstract: 'Abstract 1',
          byline: 'Author 1',
          published_date: '2024-03-15',
        },
        {
          id: 2,
          title: 'Article 2',
          abstract: 'Abstract 2',
          byline: 'Author 2',
          published_date: '2024-03-16',
        },
      ],
    };

    useFetch.mockReturnValueOnce({ data: mockArticleList });
    const { getAllByTestId } = renderWithRouter(<ArticleList />);
    const articleItems = getAllByTestId('article-item');
    expect(articleItems).toHaveLength(2);

    expect(articleItems[0]).toHaveTextContent('Article 1');
    expect(articleItems[0]).toHaveTextContent('Abstract 1');
    expect(articleItems[0]).toHaveTextContent('Author 1');
    expect(articleItems[0]).toHaveTextContent('Published on: 2024-03-15');

    expect(articleItems[1]).toHaveTextContent('Article 2');
    expect(articleItems[1]).toHaveTextContent('Abstract 2');
    expect(articleItems[1]).toHaveTextContent('Author 2');
    expect(articleItems[1]).toHaveTextContent('Published on: 2024-03-16');
  });
});
