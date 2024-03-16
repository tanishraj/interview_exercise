import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { ArticleItem } from '../article-item/article-item';
import { ARTICLE_API_URL } from '../../utils/constants';
import './article-list.scss';

export const ArticleList = () => {
  const { data: articleList } = useFetch(
    `${process?.env?.API_BASE_URL}${ARTICLE_API_URL}${process?.env?.API_KEY}`
  );

  return (
    <div className='article-list-container'>
      {articleList &&
        articleList?.results?.map(article => (
          <ArticleItem
            article={article}
            key={article?.id}
          />
        ))}
    </div>
  );
};
