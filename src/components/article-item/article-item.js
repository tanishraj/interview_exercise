import React from 'react';
import { Link } from 'react-router-dom';

import './article-item.scss';

export const ArticleItem = ({ article }) => {
  return (
    <Link
      className='article-link'
      data-testid='article-link'
      to={`/article/${encodeURIComponent(article?.uri)}`}
    >
      <div
        className='article-list-item'
        data-testid='article-item'
      >
        <img
          src={article?.media?.[0]?.['media-metadata']?.[2]?.url}
          alt={article?.title}
        />
        <div className='article-details'>
          <div className='summary'>
            <h2 className='title'>{article?.title}</h2>
            <p className='abstract'>{article?.abstract}</p>
            <p className='author'> - {article?.byline}</p>
          </div>
          <div className='publisher'>
            <p>Published on: {article?.published_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
