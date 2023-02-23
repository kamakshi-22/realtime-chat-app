import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './App.scss';
import { Home } from './pages/home/Home';
import React, { useRef, useState } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
