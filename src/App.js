import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

const Cart = React.lazy(() => import('./components/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <React.Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
