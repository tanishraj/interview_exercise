import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import './article-details.scss';

export const ArticleDetails = () => {
  const { uri } = useParams();
  const { data } = useFetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=uri:"${uri}"&&api-key=mKLOO4LGyXmOJaleFjlZc34CXubtIW1W`
  );
  const articleContent = data?.response?.docs?.[0];
  const IMAGE_URL = 'https://static01.nyt.com/';

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
