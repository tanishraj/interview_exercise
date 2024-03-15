import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { ARTICLE_DETAIL_API_URL } from '../../utils/constants';
import './article-details.scss';

export const ArticleDetails = () => {
  const { uri } = useParams();
  const { data } = useFetch(
    `${process.env.API_BASE_URL}${ARTICLE_DETAIL_API_URL}"${uri}"&&api-key=${process.env.API_KEY}`
  );
  const articleContent = data?.response?.docs?.[0];
  const IMAGE_URL = 'https://static01.nyt.com/';

  if (!articleContent) return;

  return (
    <div className='article-container'>
      <img src={`${IMAGE_URL}${articleContent?.multimedia?.[0]?.url}`} />
      <div className='article-description'>
        <h1>{articleContent?.headline?.main}</h1>
        <p>{articleContent?.abstract}</p>
        <p>{articleContent?.lead_paragraph}</p>
        <p>{articleContent?.byline?.original}</p>
        <p className='highlight'>{articleContent?.pub_date}</p>
        <p className='highlight'>Source: {articleContent?.source}</p>
        <a
          href={articleContent?.web_url}
          target='_blank'
          rel='noreferrer'
          className='read-more'
        >
          Read more...
        </a>
      </div>
    </div>
  );
};
