import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { HomePage } from '../pages/home/home-page';
import { ArticlePage } from '../pages/article/article-page';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/article/:uri',
        element: <ArticlePage />,
      },
    ],
  },
]);
