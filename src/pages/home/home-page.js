import React from 'react';
import './home-page.scss';
import { ArticleList } from '../../components/article-list/article-list';

export const HomePage = () => {
  return (
    <div className='article-page-wrapper'>
      <div className='article-page-container'>
        <ArticleList />
      </div>
    </div>
  );
};
