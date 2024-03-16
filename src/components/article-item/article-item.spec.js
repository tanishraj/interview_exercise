import React from 'react';
import '@testing-library/jest-dom';

import { renderWithRouter } from '../../utils/test-utils/renderWithRouter';
import { ArticleItem } from './article-item';

describe('ArticleItem Component', () => {
  const article = {
    uri: 'mock-uri',
    media: [{ 'media-metadata': [{ url: 'mock-image-url' }] }],
    title: 'Mock Title',
    abstract: 'Mock Abstract',
    byline: 'Mock Author',
    published_date: '2024-03-15',
  };

  test('renders article details correctly', () => {
    const { getByText, getByTestId } = renderWithRouter(
      <ArticleItem article={article} />
    );

    const articleLink = getByTestId('article-link');
    const articleTitle = getByText('Mock Title');
    const articleAbstract = getByText('Mock Abstract');
    const articlePublishedDate = getByText('Published on: 2024-03-15');

    expect(articleLink).toHaveAttribute('href', '/article/mock-uri');
    expect(articleTitle).toBeInTheDocument();
    expect(articleAbstract).toBeInTheDocument();
    expect(articlePublishedDate).toBeInTheDocument();
  });

  test('renders without crashing with missing data', () => {
    const articleWithMissingData = {
      uri: 'mock-uri',
      media: [{ 'media-metadata': [{ url: 'mock-image-url' }] }],
    };

    const { getByTestId } = renderWithRouter(
      <ArticleItem article={articleWithMissingData} />
    );

    const articleLink = getByTestId('article-link');
    expect(articleLink).toBeInTheDocument();
  });
});
