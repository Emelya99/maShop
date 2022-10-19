import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './style.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

const CartPage = React.lazy(() => import('./pages/CartPage'));
const SingleProductPage = React.lazy(() => import('./pages/SingleProductPage'));

function App() {
  return (
    <React.Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
