import React from 'react';
import { Header, Footer } from 'components';
import {
  MainContainer,
  DevTools,
  Modal } from 'containers';
import './App.scss';

export default () => (
  <div className="App" >
    <Modal />
    <Header />
    <MainContainer />
    <Footer />
    <DevTools />
  </div>
);
