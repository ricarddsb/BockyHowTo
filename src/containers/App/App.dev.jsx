import React from 'react';
import { Header, Footer } from 'components';
import {
  MainContainer,
  DevTools,
  Modal } from 'containers';
import './App.scss';

export default () => (
  <div >
    <Modal className="modal-wrapper" />
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
      <DevTools />
    </div>
  </div>
);
