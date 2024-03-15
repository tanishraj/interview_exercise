import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';
import { ArticleDetails } from './article-details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

describe('ArticleDetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders article details correctly', async () => {
    const mockUri = 'mock-uri';
    const mockData = {
      response: {
        docs: [
          {
            multimedia: [{ url: 'mock-image-url' }],
            headline: { main: 'Mock Headline' },
            abstract: 'Mock Abstract',
            lead_paragraph: 'Mock Lead Paragraph',
            byline: { original: 'Mock Author' },
            pub_date: 'Mock Date',
            source: 'Mock Source',
            web_url: 'mock-url',
          },
        ],
      },
    };

    useParams.mockReturnValue({ uri: mockUri });
    useFetch.mockReturnValue({ data: mockData });

    const { getByText } = render(<ArticleDetails />);

    await waitFor(() => {
      expect(getByText('Mock Headline')).toBeInTheDocument();
      expect(getByText('Mock Abstract')).toBeInTheDocument();
      expect(getByText('Mock Lead Paragraph')).toBeInTheDocument();
      expect(getByText('Mock Author')).toBeInTheDocument();
      expect(getByText('Mock Date')).toBeInTheDocument();
      expect(getByText('Read more...')).toHaveAttribute('href', 'mock-url');
    });
  });

  test('renders nothing when article content is not available', async () => {
    useParams.mockReturnValue({ uri: 'mock-uri' });
    useFetch.mockReturnValue({ data: null });

    const { container } = render(<ArticleDetails />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });
});
