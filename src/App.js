import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import './App.scss';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
