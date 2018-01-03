import React from 'react';
import { Header, Footer } from 'components';
import { MainContainer } from 'containers';
import './App.scss';

export default () => (
  <div className="App" >
    <Header />
    <MainContainer />
    <Footer />
  </div>
);
