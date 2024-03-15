import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './article-list.scss';
import { ArticleItem } from '../article-item/article-item';

export const ArticleList = () => {
  const { data: articleList } = useFetch(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=mKLOO4LGyXmOJaleFjlZc34CXubtIW1W'
  );

  return (
    <div className='article-list-container'>
      {articleList &&
        articleList.results.map(article => (
          <ArticleItem
            article={article}
            key={article?.id}
          />
        ))}
    </div>
  );
};
