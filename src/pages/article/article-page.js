import React from 'react';
import './article-page.scss';
import { ArticleDetails } from '../../components/article-details/article-details';

export const ArticlePage = () => {
  return (
    <div className='article-detail-wrapper'>
      <div className='article-detail-container'>
        <ArticleDetails />
      </div>
    </div>
  );
};
