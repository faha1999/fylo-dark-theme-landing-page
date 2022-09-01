import React from 'react';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Productive } from './components/Productive';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <Productive />
    </>
  );
};
